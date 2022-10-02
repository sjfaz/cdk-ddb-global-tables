#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { GlobalDataLayer } from "../stacks/GlobalDataLayer";
import { RegionAPILayer } from "../stacks/RegionAPILayer";

const app = new cdk.App();

new GlobalDataLayer(app, "CdkDdbGlobalTablesStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: "eu-west-2",
  },
});

new RegionAPILayer(app, "LondonAPIStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: "eu-west-2",
  },
});

new RegionAPILayer(app, "FrankfurtAPIStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: "eu-central-1",
  },
});
