import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppModule } from "./app.module";
import util = require("util");

describe("AppController", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();

    await app.init();
  });

  afterAll(async () => {
    app.close();
  });

  describe("getData", () => {
    it('should return "Welcome to webpipeline-api!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual({
        message: "Welcome to webpipeline-api!",
      });
    });
  });
});
