import {Entity, model, property} from '@loopback/repository';

@model({
  'settings': {
    'idInjection': false,
    'postgresql': {'schema': 'public', 'table': 'v_nested_sets_graph_reachable_node'},
  },
})
export class VNestedSetsGraphReachableNode extends Entity {
  @property({
    type: Number,
    id: true,
    required: false,
    scale: 0,
    postgresql: {
      'columnName': 'n1',
      'dataType': 'bigint',
      'dataLength': null,
      'dataPrecision': null,
      'dataScale': 0,
      'nullable': 'YES',
    },
  })
  n1?: Number;

  @property({
    type: Number,
    required: false,
    scale: 0,
    postgresql: {
      'columnName': 'n2',
      'dataType': 'bigint',
      'dataLength': null,
      'dataPrecision': null,
      'dataScale': 0,
      'nullable': 'YES',
    },
  })
  n2?: Number;

  @property({
    type: String,
    required: false,
    postgresql: {
      'columnName': 'text',
      'dataType': 'text',
      'dataLength': null,
      'dataPrecision': null,
      'dataScale': null,
      'nullable': 'YES',
    },
  })
  text?: String;

  constructor(data?: Partial<VNestedSetsGraphReachableNode>) {
    super(data);
  }
}
