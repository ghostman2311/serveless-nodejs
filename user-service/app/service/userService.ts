import { successResponse } from "../utility/response";
import { APIGatewayProxyEventV2 } from "aws-lambda";

export class UserService {
  constructor() {}

  async createUser(event: APIGatewayProxyEventV2) {
    return successResponse({ message: "response from signup" });
  }

  async createProfile(event: APIGatewayProxyEventV2) {
    return successResponse({ message: "response from create profile" });
  }

  async getProfile(event: APIGatewayProxyEventV2) {
    return successResponse({ message: "response from get profile" });
  }
  async updateProfile(event: APIGatewayProxyEventV2) {
    return successResponse({ message: "response from update profile" });
  }
}
