import {Entity, model, property} from '@loopback/repository';

@model({
  'settings': {
    'idInjection': false,
    'postgresql': {'schema': 'public', 'table': 'v_nested_sets_graph_source_node'},
  },
})
export class VNestedSetsGraphSourceNode extends Entity {
  @property({
    type: Number,
    required: false,
    scale: 0,
    id: true,
    postgresql: {
      'columnName': 'node_id',
      'dataType': 'bigint',
      'dataLength': null,
      'dataPrecision': null,
      'dataScale': 0,
      'nullable': 'YES',
    },
  })
  nodeId?: Number;

  @property({
    type: Number,
    required: false,
    scale: 0,
    postgresql: {
      'columnName': 'lft',
      'dataType': 'bigint',
      'dataLength': null,
      'dataPrecision': null,
      'dataScale': 0,
      'nullable': 'YES',
    },
  })
  lft?: Number;

  @property({
    type: Number,
    required: false,
    scale: 0,
    postgresql: {
      'columnName': 'rgt',
      'dataType': 'bigint',
      'dataLength': null,
      'dataPrecision': null,
      'dataScale': 0,
      'nullable': 'YES',
    },
  })
  rgt?: Number;

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

  @property({
    type: String,
    required: false,
    postgresql: {
      'columnName': 'created_timestamp',
      'dataType': 'timestamp with time zone',
      'dataLength': null,
      'dataPrecision': null,
      'dataScale': null,
      'nullable': 'YES',
    },
  })
  createdTimestamp?: String;

  @property({
    type: String,
    required: false,
    postgresql: {
      'columnName': 'last_modified',
      'dataType': 'timestamp with time zone',
      'dataLength': null,
      'dataPrecision': null,
      'dataScale': null,
      'nullable': 'YES',
    },
  })
  lastModified?: String;

  constructor(data?: Partial<VNestedSetsGraphSourceNode>) {
    super(data);
  }
}
