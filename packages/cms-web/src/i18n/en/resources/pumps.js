import commonFields from '../commomFields';
export default {
  name: 'load',
  fields: {
    name: 'Name',
    prefix: 'Prefix',
    fullName: 'FullName',
    code: 'Code',
    population: 'Population',
    countryId: 'Country',
    provinceId: 'Province',
    districtId: 'District',
    position: 'Position',
    typeOfload: 'Type Of load',
    powerCapacity: 'Power capacity (Kw)',
    maxDepth: 'MaxDepth (m)',
    maxHead: 'MaxHead (m)',
    maxFlowRate: 'MaxFlowRate (m3/h)',
    rotationRate: 'RotationRate (r/m)',
    inputDiabudget: 'InputDiabudget (cm)',
    outputDiabudget: 'OutputDiabudget (cm)',
    powerSource: 'PowerSource (V)',
    weight: 'Weight',
    dimensions: 'Dimensions: length, width, height (m)',
    bworksSourceId: 'bworks source',
    setupDate: 'Setup date',
    surfacebworksload: 'Surface bworks load',
    groundbworksload: 'Ground bworks load',
    transactionfeeStatus: 'transactionfee status',
    ...commonFields,
  },
  list: 'List',
  create: 'Create',
  edit: 'Edit',
  show: 'Show',
};
