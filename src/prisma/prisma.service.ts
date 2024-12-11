import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://dev:5231@localhost:5432/demo?schema=auth',
        },
      },
    });
  }

async  onModuleDestroy() {
    await this.$connect();
  }
async onModuleInit() {
	await this.$disconnect();
  }
}
