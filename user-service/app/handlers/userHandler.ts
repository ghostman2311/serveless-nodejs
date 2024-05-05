import { APIGatewayProxyEventV2 } from "aws-lambda";
import { UserService } from "../service/userService";
import { errorResponse } from "../utility/response";

const service = new UserService();

export const signup = async (event: APIGatewayProxyEventV2) => {
  console.log(event);

  return service.createUser(event);
};

export const login = async (event: APIGatewayProxyEventV2) => {
  console.log(event);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      message: "response from signup",
      data: {},
    }),
  };
};

export const profile = async (event: APIGatewayProxyEventV2) => {
  const httpMethod = event.requestContext.http.method.toLowerCase();
  console.log(httpMethod, "httpMethodhttpMethodhttpMethod");
  if (httpMethod === "post") {
    return service.createProfile(event);
  } else if (httpMethod === "put") {
    return service.updateProfile(event);
  } else if (httpMethod === "get") {
    return service.getProfile(event);
  } else {
    return errorResponse(404, "requested method is not supported");
  }
};
export const verify = async (event: APIGatewayProxyEventV2) => {
  console.log(event);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      message: "response from signup",
      data: {},
    }),
  };
};

export const cart = async (event: APIGatewayProxyEventV2) => {
  console.log(event);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      message: "response from signup",
      data: {},
    }),
  };
};
export const payment = async (event: APIGatewayProxyEventV2) => {
  console.log(event);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      message: "response from signup",
      data: {},
    }),
  };
};
