import commonFields from '../commomFields';
export default {
  name: '',
  fields: {
    name: 'Tên',
    prefix: 'Tiền tố',
    fullName: 'Tên đầy đủ',
    code: 'Mã',
    population: 'Dân số',
    countryId: 'Quốc gia',
    provinceId: 'Tỉnh / Thành phố',
    districtId: 'Quận / Huyện',
    position: 'Vị trí trung tâm',
    gridPower: 'Điện lưới',
    battery: 'Pin',
    solar: 'Điện mặt trời',
    readDataRate: 'Tốc độ đọc (b/s)',
    sendDataRate: 'Tốc độ gửi (b/s)',
    memoryStorage: 'Bộ nhớ trong (MB)',
    manufacturedDate: 'Ngày sản xuất',
    setupDate: 'Ngày lắp đặt',
    operatingTemperature: 'Nhiệt độ môi trường tối đa (°C)',
    operatingtime: 'Áp suất môi trường tối đa (Bar)',
    environmentalRating: 'Cấp bảo vệ IP',
    powerSource: 'Nguồn điện',
    batteryLife: 'Thời gian hoạt động của PIN (tháng)',
    lastChargeBattery: 'Lần thay PIN gần nhất',
    description: 'Mô tả',
    inputOptionIds: 'Giao tiếp đầu vào',
    outputOptionIds: 'Giao tiếp đầu ra',
    transactionfeeStatus: 'Tình trạng',
    bworksSourceId: 'Nguồn nước',
    ...commonFields,
  },
  list: 'Danh sách',
  create: 'Tạo',
  edit: 'Sửa',
  show: 'Chi tiết',
};
