import { Module } from "@nestjs/common";
import { AppleController } from "./apple.controller";
import { AppleService } from "./apple.service";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  controllers: [AppleController],
  providers: [AppleService]
})
export class AppleModule {
}
