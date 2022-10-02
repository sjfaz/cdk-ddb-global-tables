import { RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";

export class GlobalDataLayer extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // GT Replicas do not inherit removal policy and PITR.
    // Stream set automatically, but can set explicitly
    const globalTable = new dynamodb.Table(this, "GTTestTable", {
      partitionKey: { name: "pk", type: dynamodb.AttributeType.STRING },
      replicationRegions: ["eu-central-1"], // additional regions only
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: RemovalPolicy.RETAIN,
      pointInTimeRecovery: true,
      stream: dynamodb.StreamViewType.NEW_AND_OLD_IMAGES,
    });
  }
}
