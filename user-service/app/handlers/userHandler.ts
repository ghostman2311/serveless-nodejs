import { APIGatewayProxyEventV2 } from "aws-lambda";
import { UserService } from "app/service/userService";

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
export const profile = async (event: APIGatewayProxyEventV2) => {
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
