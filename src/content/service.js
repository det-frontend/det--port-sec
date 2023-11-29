import iot from '../assets/iotservice.jpg'
import smartHome from '../assets/smarthome.jpg'
import fuel from '../assets/fuelstation.jpg'
import pos from '../assets/pos.jpg'

const serviceContent = [
  {
    id: 1,
    title: "Fuel Station Service",
    subtitle:
      "As a fuel station service provider, our primary aim is to cater to the fueling needs of motorists efficiently and conveniently. ",
    img: fuel,
    delay: 0,
  },
  {
    id: 2,
    title: "IOT Service",
    subtitle:
      "We provide IoT solutions and technologies for facilities that need to be communicated between devices and cloud, as well as between the devices themselves. ",
    img: iot,
    delay: 0.2,
  },
  {
    id: 3,
    title: "Smart Home Service",
    subtitle:
      "Our Smart Home Devices are interconnected through the internet, allowing the user to control functions such as security access to the home, temperature, lighting, and a home theater remotely. ",
    img: smartHome,
    delay: 0.4,
  },
  {
    id: 4,
    title: "POS System",
    subtitle:
      "We provide tailored Point-of-Sale (POS) system services, offering installation, customization, and maintenance of advanced POS software and hardware for diverse businesses. ",
    img: pos,
    delay: 0,
  },
];

export default serviceContent;