import { UserRepository } from "../repository/userRepository";
import { successResponse } from "../utility/response";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export class UserService {
  repository: UserRepository;
  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async createUser(event: APIGatewayProxyEventV2) {
    const body = event.body;

    console.log(body);
    await this.repository.createUserOperation();
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
