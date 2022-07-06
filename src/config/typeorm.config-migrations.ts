import { DataSource } from 'typeorm';
import { typeOrmConfig } from './typeorm.config';

const dataSource: DataSource = new DataSource(typeOrmConfig);
// dataSource.initialize();
export = dataSource;
