import { successResponse } from "app/utility/response";
import { APIGatewayProxyEventV2 } from "aws-lambda";

export class UserService {
  constructor() {}

  async createUser(event: APIGatewayProxyEventV2) {
    return successResponse({ message: "response from signup" });
  }
}
