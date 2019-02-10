import {Entity, model, property} from '@loopback/repository';

@model({'settings':{'idInjection':false,'postgresql':{'schema':'public','table':'applicationcredential'}}})
export class Applicationcredential extends Entity {
  @property({
    type: String,
    required: true,
    postgresql: {'columnName':'provider','dataType':'text','dataLength':null,'dataPrecision':null,'dataScale':null,'nullable':'NO'}
  })
  provider: String | undefined;

  @property({
    type: String,
    required: false,
    postgresql: {'columnName':'authscheme','dataType':'text','dataLength':null,'dataPrecision':null,'dataScale':null,'nullable':'YES'}
  })
  authscheme?: String;

  @property({
    type: String,
    required: false,
    postgresql: {'columnName':'credentials','dataType':'text','dataLength':null,'dataPrecision':null,'dataScale':null,'nullable':'YES'}
  })
  credentials?: String;

  @property({
    type: String,
    required: false,
    postgresql: {'columnName':'created','dataType':'timestamp with time zone','dataLength':null,'dataPrecision':null,'dataScale':null,'nullable':'YES'}
  })
  created?: String;

  @property({
    type: String,
    required: false,
    postgresql: {'columnName':'modified','dataType':'timestamp with time zone','dataLength':null,'dataPrecision':null,'dataScale':null,'nullable':'YES'}
  })
  modified?: String;

  @property({
    type: Number,
    required: true,
    scale: 0,
    id: true,
    postgresql: {'columnName':'id','dataType':'integer','dataLength':null,'dataPrecision':null,'dataScale':0,'nullable':'NO'}
  })
  id: Number | undefined;

  constructor(data?: Partial<Applicationcredential>) {
    super(data);
  }
}
