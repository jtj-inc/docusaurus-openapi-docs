/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

import zlib from "zlib";

import React from "react";

import BrowserOnly from "@docusaurus/BrowserOnly";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { HtmlClassNameProvider } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { createAuth } from "@theme/ApiExplorer/Authorization/slice";
import { createPersistanceMiddleware } from "@theme/ApiExplorer/persistanceMiddleware";
import DocItemLayout from "@theme/ApiItem/Layout";
import type { Props } from "@theme/DocItem";
import DocItemMetadata from "@theme/DocItem/Metadata";
import clsx from "clsx";
import { ServerObject } from "docusaurus-plugin-openapi-docs/src/openapi/types";
import { ParameterObject } from "docusaurus-plugin-openapi-docs/src/openapi/types";
import type { ApiItem as ApiItemType } from "docusaurus-plugin-openapi-docs/src/types";
/* eslint-disable import/no-extraneous-dependencies*/
import type {
  DocFrontMatter,
  ThemeConfig,
} from "docusaurus-theme-openapi-docs/src/types";
import { Provider } from "react-redux";

import { createStoreWithoutState, createStoreWithState } from "./store";

const { DocProvider } = require("@docusaurus/theme-common/internal");

let ApiExplorer = (_: { item: any; infoPath: any }) => <div />;

if (ExecutionEnvironment.canUseDOM) {
  ApiExplorer = require("@theme/ApiExplorer").default;
}

interface ApiFrontMatter extends DocFrontMatter {
  readonly api?: ApiItemType;
}

interface SchemaFrontMatter extends DocFrontMatter {
  readonly schema?: boolean;
}

export default function ApiItem(props: Props): JSX.Element {
  const docHtmlClassName = `docs-doc-id-${props.content.metadata.id}`;
  const MDXComponent = props.content;
  const { frontMatter } = MDXComponent;
  const { info_path: infoPath } = frontMatter as DocFrontMatter;
  let { api } = frontMatter as ApiFrontMatter;
  const { schema } = frontMatter as SchemaFrontMatter;
  // decompress and parse
  if (api) {
    try {
      api = JSON.parse(
        zlib
          .inflateSync(
            Buffer.from(api as any, "base64") as unknown as Uint8Array
          )
          .toString()
      );
    } catch {}
  }
  const { siteConfig } = useDocusaurusContext();
  const themeConfig = siteConfig.themeConfig as ThemeConfig;
  const options = themeConfig.api;
  const isBrowser = useIsBrowser();

  // Regex for 2XX status
  const statusRegex = new RegExp("(20[0-9]|2[1-9][0-9])");

  // Define store2
  let store2: any = {};
  const persistanceMiddleware = createPersistanceMiddleware(options);

  // Init store for SSR
  if (!isBrowser) {
    store2 = createStoreWithoutState({}, [persistanceMiddleware]);
  }

  // Init store for CSR to hydrate components
  if (isBrowser) {
    // Create list of only 2XX response content types to create request samples from
    let acceptArray: any = [];
    for (const [code, content] of Object.entries(api?.responses ?? [])) {
      if (statusRegex.test(code)) {
        acceptArray.push(Object.keys(content.content ?? {}));
      }
    }
    acceptArray = acceptArray.flat();

    const content = api?.requestBody?.content ?? {};
    const contentTypeArray = Object.keys(content);
    const servers = api?.servers ?? [];
    const params = {
      path: [] as ParameterObject[],
      query: [] as ParameterObject[],
      header: [] as ParameterObject[],
      cookie: [] as ParameterObject[],
    };
    api?.parameters?.forEach(
      (param: { in: "path" | "query" | "header" | "cookie" }) => {
        const paramType = param.in;
        const paramsArray: ParameterObject[] = params[paramType];
        paramsArray.push(param as ParameterObject);
      }
    );
    const auth = createAuth({
      security: api?.security,
      securitySchemes: api?.securitySchemes,
      options,
    });
    // TODO: determine way to rehydrate without flashing
    // const acceptValue = window?.sessionStorage.getItem("accept");
    // const contentTypeValue = window?.sessionStorage.getItem("contentType");
    const server = window?.sessionStorage.getItem("server");
    const serverObject = (JSON.parse(server!) as ServerObject) ?? {};

    store2 = createStoreWithState(
      {
        accept: {
          value: acceptArray[0],
          options: acceptArray,
        },
        contentType: {
          value: contentTypeArray[0],
          options: contentTypeArray,
        },
        server: {
          value: serverObject.url ? serverObject : undefined,
          options: servers,
        },
        response: { value: undefined },
        body: { type: "empty" },
        params,
        auth,
      },
      [persistanceMiddleware]
    );
  }

  if (api) {
    return (
      <DocProvider content={props.content}>
        <HtmlClassNameProvider className={docHtmlClassName}>
          <div>
            <>{<DocItemMetadata />}</>
          </div>
          <DocItemLayout>
            <Provider store={store2}>
              <div className={clsx("row", "theme-api-markdown")}>
                <div className="col col--7 openapi-left-panel__container">
                  <div>
                    <>{<MDXComponent />}</>
                  </div>
                </div>
                <div className="col col--5 openapi-right-panel__container">
                  <BrowserOnly fallback={<div>Loading...</div>}>
                    {() => {
                      return (
                        <>{<ApiExplorer item={api} infoPath={infoPath} />}</>
                      );
                    }}
                  </BrowserOnly>
                </div>
              </div>
            </Provider>
          </DocItemLayout>
        </HtmlClassNameProvider>
      </DocProvider>
    );
  } else if (schema) {
    return (
      <DocProvider content={props.content}>
        <HtmlClassNameProvider className={docHtmlClassName}>
          <div>
            <>{<DocItemMetadata />}</>
          </div>
          <DocItemLayout>
            <div className={clsx("row", "theme-api-markdown")}>
              <div className="col col--12">
                <div>
                  <>{<MDXComponent />}</>
                </div>
              </div>
            </div>
          </DocItemLayout>
        </HtmlClassNameProvider>
      </DocProvider>
    );
  }

  // Non-API docs
  return (
    <DocProvider content={props.content}>
      <HtmlClassNameProvider className={docHtmlClassName}>
        <div>
          <>{<DocItemMetadata />}</>
        </div>
        <DocItemLayout>
          <div className="row">
            <div className="col col--12">
              <div>
                <>{<MDXComponent />}</>
              </div>
            </div>
          </div>
        </DocItemLayout>
      </HtmlClassNameProvider>
    </DocProvider>
  );
}
