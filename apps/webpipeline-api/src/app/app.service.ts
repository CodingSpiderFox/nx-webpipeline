import { Injectable } from "@nestjs/common";
import util = require("util");

@Injectable()
export class AppService {
  constructor() {}

  getData(): { message: string } {
    return { message: "Welcome to webpipeline-api!" };
  }
}
