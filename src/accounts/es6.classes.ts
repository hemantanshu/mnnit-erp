import { TestController } from './controllers/test.controller';
import { FinancialYearEntity } from './entities/financial.year.entity';
import { PaymentRequestEntity } from './entities/payment.request.entity';

const es6Classes = {
    controllers: [TestController],
    entities: [FinancialYearEntity, PaymentRequestEntity],
    services: [],
};

export default es6Classes;
