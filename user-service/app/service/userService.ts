import { plainToClass } from "class-transformer";
import { UserRepository } from "../repository/userRepository";
import { errorResponse, successResponse } from "../utility/response";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import { autoInjectable } from "tsyringe";
import { SignupInput } from "../models/dto/SignupInput";
import { AppValidationError } from "../utility/errors";
import { getHashedPassword, getSalt } from "../utility/password";
import { UserModel } from "../models/User";

@autoInjectable()
export class UserService {
  repository: UserRepository;
  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async createUser(event: APIGatewayProxyEventV2) {
    try {
      const input = plainToClass(SignupInput, event.body);
      const error = await AppValidationError(input);
      if (error) return errorResponse(404, error);
      const salt = await getSalt();
      const hashedPassword = await getHashedPassword(input.password, salt);
      const data = await this.repository.createAccount({
        email: input.email,
        password: hashedPassword,
        phone: input.phone,
        userType: "BUYER",
        salt,
      });
      return successResponse(data as UserModel);
    } catch (error) {
      console.log(error);
      return errorResponse(500, error);
    }
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
