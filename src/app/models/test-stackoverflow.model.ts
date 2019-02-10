import {Entity, model, property} from '@loopback/repository';

@model({'settings': {'idInjection': false, 'postgresql': {'schema': 'public', 'table': 'test_stackoverflow'}}})
export class TestStackoverflow extends Entity {
  @property({
    type: Number,
    required: true,
    scale: 0,
    id: true,
    postgresql: {
      'columnName': 'id',
      'dataType': 'bigint',
      'dataLength': null,
      'dataPrecision': null,
      'dataScale': 0,
      'nullable': 'NO',
    },
  })
  id: Number;

  @property({
    type: String,
    required: false,
    postgresql: {
      'columnName': 'created_at',
      'dataType': 'timestamp without time zone',
      'dataLength': null,
      'dataPrecision': null,
      'dataScale': null,
      'nullable': 'YES',
    },
  })
  createdAt?: String;

  @property({
    type: String,
    required: false,
    postgresql: {
      'columnName': 'updated_at',
      'dataType': 'timestamp without time zone',
      'dataLength': null,
      'dataPrecision': null,
      'dataScale': null,
      'nullable': 'YES',
    },
  })
  updatedAt?: String;

  constructor(data?: Partial<TestStackoverflow>) {
    super(data);
  }
}
