import {Entity, model, property} from '@loopback/repository';

@model({"settings":{"idInjection":false,"postgresql":{"schema":"public","table":"v_nested_sets_graph_in_degree"}}})
export class VNestedSetsGraphInDegree extends Entity {
  @property({
    type: Number,
    required: false,
    scale: 0,
    postgresql: {"columnName":"node_id","dataType":"bigint","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"YES"},
  })
  nodeId?: Number;

  @property({
    type: Number,
    required: false,
    scale: 0,
    postgresql: {"columnName":"count","dataType":"bigint","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"YES"},
  })
  count?: Number;

  constructor(data?: Partial<VNestedSetsGraphInDegree>) {
    super(data);
  }
}