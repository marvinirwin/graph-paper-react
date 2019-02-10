import {Entity, model, property} from '@loopback/repository';

@model({"settings":{"idInjection":false,"postgresql":{"schema":"public","table":"edge_revision"}}})
export class EdgeRevision extends Entity {
  @property({
    type: Number,
    required: true,
    scale: 0,
    id: true,
    postgresql: {"columnName":"id","dataType":"bigint","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"NO"},
  })
  id: Number;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"created_timestamp","dataType":"timestamp with time zone","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  createdTimestamp?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"text","dataType":"text","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  text?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"classification","dataType":"text","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  classification?: String;

  @property({
    type: Number,
    required: true,
    scale: 0,
    postgresql: {"columnName":"edge_id","dataType":"bigint","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"NO"},
  })
  edgeId: Number;

  @property({
    type: Number,
    required: false,
    scale: 0,
    postgresql: {"columnName":"n1","dataType":"bigint","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"YES"},
  })
  n1?: Number;

  @property({
    type: Number,
    required: false,
    scale: 0,
    postgresql: {"columnName":"n2","dataType":"bigint","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"YES"},
  })
  n2?: Number;

  @property({
    type: Boolean,
    required: false,
    postgresql: {"columnName":"visible","dataType":"boolean","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  visible?: Boolean;

  constructor(data?: Partial<EdgeRevision>) {
    super(data);
  }
}
