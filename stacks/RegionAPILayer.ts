import { RemovalPolicy, Stack, StackProps, aws_lambda } from "aws-cdk-lib";
import { Construct } from "constructs";

export class RegionAPILayer extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
  }
}
