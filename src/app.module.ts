import { Module } from '@nestjs/common';
import { ReportsModule } from './reports/reports.module';
import { PrinterModule } from './printer/printer.module';

@Module({
  imports: [ReportsModule, PrinterModule],
})
export class AppModule {}
