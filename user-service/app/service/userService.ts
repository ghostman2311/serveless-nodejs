import { plainToClass } from "class-transformer";
import { UserRepository } from "../repository/userRepository";
import { errorResponse, successResponse } from "../utility/response";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import { autoInjectable } from "tsyringe";
import { SignupInput } from "../models/dto/SignupInput";
import { AppValidationError } from "../utility/errors";

@autoInjectable()
export class UserService {
  repository: UserRepository;
  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async createUser(event: APIGatewayProxyEventV2) {
    const input = plainToClass(SignupInput, event.body);
    const error = await AppValidationError(input);
    if (error) return errorResponse(404, error);
    return successResponse(input);
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
