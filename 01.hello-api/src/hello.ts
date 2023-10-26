import { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from "aws-lambda"

type ProxyHandler = Handler<APIGatewayProxyEvent, APIGatewayProxyResult>

export const handler: ProxyHandler = async (event, context) => {
  const name = event.queryStringParameters?.name

  if (!name) return { statusCode: 404, body: "NOT_FOUND" }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello ${name}`,
        input: { event, context },
      },
      null,
      2
    ),
  }
}
