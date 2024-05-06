# 3 May

## Ep-1(Theory)

## Ep-2

1. Database design

- Expectation from database
  ![alt text](image-13.png)
- ![alt text](image-14.png)

- User Table
  ![alt text](image-15.png)

- Product table definiation
  ![alt text](image-16.png)

- Order and transaction table
  ![alt text](image-17.png)

- Participant and live chat tables
  ![alt text](image-18.png)

2. Service Endpoints
   ![alt text](image-20.png)

- User endpoints
  ![alt text](image-21.png)

- Product endpoints
  ![alt text](image-22.png)

- Transaction endpoints
  ![alt text](image-23.png)

- Live chat endpoints
  ![alt text](image-24.png)

## Ep-3

1. Run serverless and download the aws cli
2. Configure the user service.
3. Install ts in user service
4. Install serverless offline
   ![alt text](image-25.png)
5. add typescript plugin
   ![alt text](image-26.png)

6. Now initialize the typescript using tsc --init.
7. Install these packages
   ![alt text](image-27.png)

8. Configure the tsconfig.json
9. delete index.js

# 4 May

## Ep-3

1. Update the yaml file like this
   ![alt text](image-28.png)

2. Create handler.ts in app folder and write code like this
   ![alt text](image-29.png)

3. Add dev script "serverless offline"
4. Please add async in the handler.

## Ep-4 (continue @17:00)

1. Add the remaining points
   ![alt text](image-30.png)

2. Create this directory structure
   ![alt text](image-31.png)

3. Refactor the code.
4. Add user service and user repo code like this
   ![alt text](image-32.png)

5. Create dto folder in models.
6. Add createUser in UserService like this
   ![alt text](image-33.png)

7. Create successResponse and errorResponse in utils
   ![alt text](image-34.png)
   ![alt text](image-35.png)

# 5 May

## Ep-4 continued

1. Create profile function in user services.
2. Use always absolute path otherwise you will get error.

# 6 May

## Ep-4 (Continued)

1. Add middy plugin `npm install --save @middy/core`
2. Install this middleware as well `npm install --save @middy/http-json-body-parser`
3. Wrap the signup handler like this
   ![alt text](image-36.png)
4. Install these libraries
   ![alt text](image-37.png)

5. Update the user Service like this
   ![alt text](image-38.png)

6. Update the handler like this
   ![alt text](image-39.png)

7. Now create a dummy function in userRepo and use it like this in userService `await this.repo.createUserOp()`
8. add `import reflect-metadata` in handler export file
9. Add these things in yaml file
   ![alt text](image-40.png)

10. Configure the aws
11. Add this script in package.json
    ![alt text](image-41.png)

## Ep-5

1. Create loginInput.ts and signUpInput.ts in dto
2. 

