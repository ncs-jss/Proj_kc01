import React from "react";
import ReactTooltip from "react-tooltip";
import { ReactSVGPanZoom } from "react-svg-pan-zoom";
import {
  Dialog,
  DialogSurface,
  DialogHeader,
  DialogHeaderTitle,
  DialogBody,
  DialogFooter,
  DialogFooterButton,
  DialogBackdrop
} from "rmwc/Dialog";
import "./Maps.css";

class Maps extends React.Component {
  constructor() {
    super();
    this.mapData = [
      {
        index: 0,
        title: "AB-1",
        desc: "This is AB-1"
      },
      {
        index: 1,
        title: "AB-2",
        desc: "This is AB-2"
      },
      {
        index: 2,
        title: "AB-3",
        desc: "This is AB-3"
      },
      {
        index: 3,
        title: "Multipurpose Hall",
        desc: "This is Multipurpose Hall"
      },
      {
        index: 4,
        title: "Central Workshop",
        desc: "This is Central Workshop"
      },
      {
        index: 5,
        title: "AB-4",
        desc: "This is AB-4"
      },
      {
        index: 6,
        title: "Boys Hostel",
        desc: "This is Boys Hostel"
      },
      {
        index: 7,
        title: "AB-5",
        desc: "This is AB-5"
      },
      {
        index: 8,
        title: "ISH",
        desc: "This is ISH"
      },
      {
        index: 9,
        title: "Temple",
        desc: "This is Temple"
      },
      {
        index: 10,
        title: "Amenity Center",
        desc: "This is Amenity Center"
      },
      {
        index: 11,
        title: "Staff Quarters",
        desc: "These are Staff Quarters"
      },
      {
        index: 12,
        title: "Girls Hostel",
        desc: "This is Girls Hostel"
      },
      {
        index: 13,
        title: "Staff Quaters",
        desc: "These are Staff Quarters"
      },
      {
        index: 14,
        title: "Guest House",
        desc: "This is Guest House"
      },
      {
        index: 15,
        title: "Power Generator Room",
        desc: "This is Power Generator Room"
      },
      {
        index: 16,
        title: "Grid Room",
        desc: "This is Grid Room"
      }
    ];
    this.state = {
      title: "title",
      desc: "desc",
      dialogOpen: false
    };
  }

  openDialog(index) {
    this.setState({
      title: this.mapData[index].title,
      desc: this.mapData[index].desc,
      dialogOpen: true
    });
  }

  render() {
    return (
      <div>
        <ReactSVGPanZoom
          className="svgPanZoom"
          detectAutoPan={false}
          width={1644}
          height={480}
          tool="auto"
          background="#f5f5f5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsxlink="http://www.w3.org/1999/xlink"
            width={1644}
            height={480}
            viewBox="0 0 1644 480"
          >
            <defs>
              <clipPath id="clip-jss-map">
                <rect width="1644" height="480" />
              </clipPath>
            </defs>
            <g id="jss-map" className="cls-1" transform="scale(1.5)">
              <rect className="cls-10" width="1644" height="480" />
              <g id="boundary" className="cls-2" transform="translate(24 1732)">
                <path
                  className="cls-8"
                  d="M 828.4141845703125 -1271 L 828 -1271 L -4 -1271 L -5.114999771118164 -1271 L -4.994200229644775 -1272.1083984375 L 43.00579833984375 -1712.1083984375 L 43.10319900512695 -1713 L 44 -1713 L 1600 -1713 L 1601 -1713 L 1601 -1712 L 1601 -1576 L 1601 -1575.144165039063 L 1600.154418945313 -1575.011962890625 L 1472.173950195313 -1555.01513671875 L 1388.200561523438 -1539.020141601563 L 1280.287231445313 -1515.0390625 L 1196.394409179688 -1483.080322265625 L 1112.466430664063 -1443.114013671875 L 1036.523315429688 -1399.148071289063 L 956.5691528320313 -1347.177612304688 L 880.5933837890625 -1291.195434570313 L 879.9011840820313 -1290.685180664063 L 879.293212890625 -1291.293212890625 L 864.0001220703125 -1306.585571289063 L 828.7072143554688 -1271.292846679688 L 828.4141845703125 -1271 Z"
                />
                <path
                  className="cls-9"
                  d="M 828 -1272 L 864 -1307.999755859375 L 880.0001831054688 -1292.000366210938 L 955.9998168945313 -1348.000244140625 L 1035.999755859375 -1400.000366210938 L 1112.000366210938 -1443.999633789063 L 1196.000244140625 -1484.000244140625 L 1280 -1515.999633789063 L 1388 -1540 L 1472.000610351563 -1556.000244140625 L 1600 -1576 L 1600 -1712 L 44 -1712 L -4 -1272 L 828 -1272 M 828.8284301757813 -1270 L 828 -1270 L -4 -1270 L -6.230000019073486 -1270 L -5.988200187683105 -1272.216796875 L 42.01179885864258 -1712.216796875 L 42.20640182495117 -1714 L 44 -1714 L 1600 -1714 L 1602 -1714 L 1602 -1712 L 1602 -1576 L 1602 -1574.288208007813 L 1600.308837890625 -1574.024047851563 L 1472.34033203125 -1554.029052734375 L 1388.407104492188 -1538.041625976563 L 1280.576049804688 -1514.078857421875 L 1196.78759765625 -1482.159912109375 L 1112.931518554688 -1442.227783203125 L 1037.046875 -1398.295654296875 L 957.1408081054688 -1346.356567382813 L 881.1865844726563 -1290.390258789063 L 879.8021850585938 -1289.370239257813 L 878.5859985351563 -1290.586181640625 L 864.0000610351563 -1305.17138671875 L 829.4141845703125 -1270.585815429688 L 828.8284301757813 -1270 Z"
                />
              </g>
              <path
                id="road"
                className="cls-3"
                d="M520-1284v-8l-20-20H244l-20,20v8H204v-8l-20-20H20L0-1332v-368l20-20H796v16H540v104H772l20,4,20,8,20,12,16,16,12,16,8,20,4,20v48l172-20,4-8-28-132v-88l16-16h476l16,16v84l-12,12h-64v12l-12,12h-36l-4-4H1260l-12,12h-40v16l-16,16h-12l-122.821,49.9L1060-1480l-8,16-188,20L628-1312H564l-20,20v8Zm104-40,236-132v-44l-4-20-8-20-12-16-12-12-12-8-20-8-20-4H540v240l24,24Zm-124,0,24-24v-356H220v356l24,24Zm-316,0,24-24v-360H28l-16,16v352l16,16Zm870.5-178.641L1176-1552h12l12-12v-24H1036ZM1216-1584h28l8-8v-16l-8-8h-28l-8,8v16Zm184-12,4,4h32l4-4v-12l-4-4h-32l-4,4v4H1260v8Zm-200,0v-16l12-12h36l12,12h136v-100H1040l-12,12v80l4,24Zm312-24,8-8v-72l-12-12H1404v92Z"
                transform="translate(80 1744)"
              />
              <g id="parks" transform="translate(-64 -132)">
                <path
                  id="playground_"
                  data-name="playground "
                  className="cls-4"
                  d="M688,2012v232l28,28h52l228-128v-52l-4-20-8-16-12-16-12-12-16-8-12-4-20-4Z"
                  transform="translate(0 -1720)"
                />
                <path
                  id="ground"
                  className="cls-4"
                  d="M368,2088v164l20,20H516l12-12V2104l-12-16Z"
                  transform="translate(0 -1720)"
                />
                <path
                  id="gh-park"
                  className="cls-4"
                  d="M348,2072V1960H284l-16,4-16,12-12,16-4,16-4,20v44Z"
                  transform="translate(0 -1720)"
                />
                <path
                  id="temple-park"
                  className="cls-4"
                  d="M1028,2156l44-4v60h-44Z"
                  transform="translate(-4 -1724)"
                />
                <path
                  id="green1"
                  className="cls-4"
                  d="M348,2080v140H300v48H180l-16-16V2080Z"
                  transform="translate(0 -1720)"
                />
                <path
                  id="green2"
                  className="cls-4"
                  d="M184,1336l12-8,36,36H344l4,16-20,4-140,16v-40Z"
                  transform="translate(836 -988)"
                />
                <path
                  id="green3"
                  className="cls-4"
                  d="M1188,2012l16,68,116-44,4,4h4l8-8v-12l-8-8Z"
                  transform="translate(0 -1720)"
                />
                <path
                  id="green4"
                  className="cls-4"
                  d="M1368,2060l-8-8-4-8v-12l8-8h32l12-12h8l4,4v8h124Z"
                  transform="translate(0 -1720)"
                />
                <path
                  id="green6"
                  className="cls-4"
                  d="M1548,1992l4-4h24l4,4v4l-4,4h-24l-4-4Z"
                  transform="translate(0 -1720)"
                />
                <path
                  id="green5"
                  className="cls-4"
                  d="M1364,1984l-8,8v8l8,8h20l8-8v-8l-8-8Z"
                  transform="translate(0 -1720)"
                />
                <path
                  id="green7"
                  className="cls-4"
                  d="M1284,1996h56v-24l-4-4h-48l-4,4Z"
                  transform="translate(0 -1720)"
                />
                <path
                  id="green8"
                  className="cls-4"
                  d="M1408,1972v8h28v-8Z"
                  transform="translate(0 -1720)"
                />
              </g>
              <g
                id="ground-2"
                data-name="ground"
                transform="translate(-64 -132)"
              >
                <path
                  id="court"
                  className="cls-5"
                  d="M844,2260l24,36,56-32-24-36Z"
                  transform="translate(0 -1720)"
                />
                <path
                  id="cricket-net"
                  className="cls-5"
                  d="M808,2220l8,12,32-20-8-12Z"
                  transform="translate(0 -1720)"
                />
                <path
                  id="ground-stage"
                  className="cls-5"
                  d="M732.018,2016c-.15,1.367,0,24,0,24h43.933v-24H732.018"
                  transform="translate(-3.951 -1720)"
                />
                <path
                  id="robowars-stage"
                  className="cls-5"
                  d="M432,2088v28h48v-28Z"
                  transform="translate(-4 -1720)"
                />
                <path
                  id="courtyard"
                  className="cls-5"
                  d="M544,1952v88h36l24-24v-40l-24-24Z"
                  transform="translate(0 -1716)"
                />
                <path
                  id="staff-parking"
                  className="cls-5"
                  d="M540,444h84l-44-44H540Z"
                  transform="translate(0 4)"
                />
                <path
                  id="student-parking2"
                  className="cls-5"
                  d="M480,552V456h48v84l-12,12Z"
                />
                <path
                  id="student-parking1"
                  className="cls-5"
                  d="M552,2272l-12-12v-84H656v72l-24,24Z"
                  transform="translate(0 -1720)"
                />
              </g>
              <g id="buildings-shadow" transform="translate(-64 -128)">
                <path
                  id="ab1"
                  className="cls-6"
                  d="M1380,2064v36h12v12h32l44,44,28-28-40-40v-12l40-40-28-28-44,44h-32v12h-12"
                  transform="translate(-840 -1720)"
                />
                <path
                  id="ab2"
                  className="cls-6"
                  d="M1384,1900v48h40l28,28v24h44v-48l-16-16,16-16-20-20-16,16-16-16Z"
                  transform="translate(-840 -1724)"
                />
                <path
                  id="ab3"
                  className="cls-6"
                  d="M1212,2052l16,16,4-4,8,8,8-8,4,4,32-32,8,8,8-8,36,36,4-4,4,4,8-8,4,4,16-16-8-8,4-4-44-44h-4v-36h-56v32l-48,48,4,4Z"
                  transform="translate(-840 -1720)"
                />
                <path
                  id="mph"
                  className="cls-6"
                  d="M1660,1992v-84H1536v32h-4v24h4v28Z"
                  transform="translate(-840 -1724)"
                />
                <path
                  id="workshop"
                  className="cls-6"
                  d="M1672,1908h40v60h-40Z"
                  transform="translate(-840 -1724)"
                />
                <path
                  id="ab4"
                  className="cls-6"
                  d="M1736,1904v36h-12v24h68v-24h-12v-36Z"
                  transform="translate(-840 -1720)"
                />
                <path
                  id="bh"
                  className="cls-6"
                  d="M-684-2401.665-696-2448l-24,4v12l-12,16-44-36-12,16-16-12,12-16-44-32,16-20h8v-32h-28v-32h136l20,12,36,156-36,10.335ZM-780-2496l32,24-8,12,20,16,8-12,28-4-16-76-12-12h-72v36l-12,12,20,16,12-12Z"
                  transform="translate(1804 2760)"
                />
                <path
                  id="ab5"
                  className="cls-6"
                  d="M-740-1612h-64v-28h-24v-12h-12v-48h12v-4h12v-12h24v16h20v16h-4v12h16v-12h-4v-12h4v-16h76v20h5.324v-24H-620v16h4v-20h20v32h16v-24h60v16h12v-8h28v48h-8v28h-36v-24h-16v8h-36v-12h-12v-4h-32v8h-44v-8h-40v12h-36v36Zm-76-72v20h20v-20Z"
                  transform="translate(2016 1884)"
                />
                <path
                  id="ish"
                  className="cls-6"
                  d="M-792-1640h-40v-16h-8v-16h8v-20h-8v-16h8v-12h40v12h8v-12h40v12h5.835v12H-744v16h4v12h-4v16h-48v12Zm-24-32v12h12v-12h20v-8h12v8h8v-12h8v-8h-12v-12h-8v12h-28v-12h-12v16h-4v16Z"
                  transform="translate(2396 1888)"
                />
                <path
                  id="temple"
                  className="cls-6"
                  d="M1876,2164v32h4v4h12l.1-4h3.9v-32h-20"
                  transform="translate(-840 -1724)"
                />
                <path
                  id="amenity"
                  className="cls-6"
                  d="M1156,2256h8v12h-24v-48h24v-4h8v4h16v28h-12v-8h-20Z"
                  transform="translate(-840 -1724)"
                />
                <path
                  id="staff2"
                  className="cls-6"
                  d="M1124,2244v24h-48v-24h16v-12h20v12Z"
                  transform="translate(-840 -1724)"
                />
                <path
                  id="gh"
                  className="cls-6"
                  d="M0-1552v-152l16-16H52v8H64v8h64v16h4v-16h20v44H132v-16h-4v16H88v-24H64v20l-16,16H40v96Z"
                  transform="translate(168 1892)"
                />
                <path
                  id="staff1"
                  className="cls-6"
                  d="M328,1908v44h20v-44Z"
                  transform="translate(0 -1720)"
                />
                <path
                  id="guest"
                  className="cls-6"
                  d="M44-1676H4v-4H0v-36H4v-4H44v44Zm-24-28v12h8v-12H20Z"
                  transform="translate(304 1964)"
                />
                <path
                  id="power"
                  className="cls-6"
                  d="M104,2220v40h20v-40Z"
                  transform="translate(0 -1724)"
                />
                <path
                  id="grid"
                  className="cls-6"
                  d="M112,2208h12v-20H112Z"
                  transform="translate(0 -1720)"
                />
              </g>
              <g id="buildings" transform="translate(-64 -132)">
                <path
                  id="ab1-2"
                  data-tip="AB-1"
                  data-for="tooltip"
                  className="cls-7"
                  d="M1380,2064v36h12v12h32l44,44,28-28-40-40v-12l40-40-28-28-44,44h-32v12h-12"
                  transform="translate(-840 -1720)"
                  onClick={() => this.openDialog(0)}
                />
                <path
                  id="ab2-2"
                  data-tip="AB-2"
                  data-for="tooltip"
                  className="cls-7"
                  d="M1384,1900v48h40l28,28v24h44v-48l-16-16,16-16-20-20-16,16-16-16Z"
                  transform="translate(-840 -1724)"
                  onClick={() => this.openDialog(1)}
                />
                <path
                  id="ab3-2"
                  data-tip="AB-3"
                  data-for="tooltip"
                  className="cls-7"
                  d="M1212,2052l16,16,4-4,8,8,8-8,4,4,32-32,8,8,8-8,36,36,4-4,4,4,8-8,4,4,16-16-8-8,4-4-44-44h-4v-36h-56v32l-48,48,4,4Z"
                  transform="translate(-840 -1720)"
                  onClick={() => this.openDialog(2)}
                />
                <path
                  id="mph-2"
                  data-tip="Multipurpose Hall"
                  data-for="tooltip"
                  className="cls-7"
                  d="M1660,1992v-84H1536v32h-4v24h4v28Z"
                  transform="translate(-840 -1724)"
                  onClick={() => this.openDialog(3)}
                />
                <path
                  id="workshop-2"
                  data-tip="Central Workshop"
                  data-for="tooltip"
                  className="cls-7"
                  d="M1672,1908h40v60h-40Z"
                  transform="translate(-840 -1724)"
                  onClick={() => this.openDialog(4)}
                />
                <path
                  id="ab4-2"
                  data-tip="AB-4"
                  data-for="tooltip"
                  className="cls-7"
                  d="M1736,1904v36h-12v24h68v-24h-12v-36Z"
                  transform="translate(-840 -1720)"
                  onClick={() => this.openDialog(5)}
                />
                <path
                  id="bh-2"
                  data-tip="Boys Hostel"
                  data-for="tooltip"
                  className="cls-7"
                  d="M-684-2401.665-696-2448l-24,4v12l-12,16-44-36-12,16-16-12,12-16-44-32,16-20h8v-32h-28v-32h136l20,12,36,156-36,10.335ZM-780-2496l32,24-8,12,20,16,8-12,28-4-16-76-12-12h-72v36l-12,12,20,16,12-12Z"
                  transform="translate(1804 2760)"
                  onClick={() => this.openDialog(6)}
                />
                <path
                  id="ab5-2"
                  data-tip="AB-5"
                  data-for="tooltip"
                  className="cls-7"
                  d="M-740-1612h-64v-28h-24v-12h-12v-48h12v-4h12v-12h24v16h20v16h-4v12h16v-12h-4v-12h4v-16h76v20h5.324v-24H-620v16h4v-20h20v32h16v-24h60v16h12v-8h28v48h-8v28h-36v-24h-16v8h-36v-12h-12v-4h-32v8h-44v-8h-40v12h-36v36Zm-76-72v20h20v-20Z"
                  transform="translate(2016 1884)"
                  onClick={() => this.openDialog(7)}
                />
                <path
                  id="ish-2"
                  data-tip="ISH"
                  data-for="tooltip"
                  className="cls-7"
                  d="M-792-1640h-40v-16h-8v-16h8v-20h-8v-16h8v-12h40v12h8v-12h40v12h5.835v12H-744v16h4v12h-4v16h-48v12Zm-24-32v12h12v-12h20v-8h12v8h8v-12h8v-8h-12v-12h-8v12h-28v-12h-12v16h-4v16Z"
                  transform="translate(2396 1888)"
                  onClick={() => this.openDialog(8)}
                />
                <path
                  id="temple-2"
                  data-tip="Temple"
                  data-for="tooltip"
                  className="cls-7"
                  d="M1876,2164v32h4v4h12l.1-4h3.9v-32h-20"
                  transform="translate(-840 -1724)"
                  onClick={() => this.openDialog(9)}
                />
                <path
                  id="amenity-2"
                  data-tip="Amenity Center"
                  data-for="tooltip"
                  className="cls-7"
                  d="M1156,2256h8v12h-24v-48h24v-4h8v4h16v28h-12v-8h-20Z"
                  transform="translate(-840 -1724)"
                  onClick={() => this.openDialog(10)}
                />
                <path
                  id="staff2-2"
                  data-tip="Staff Quarters"
                  data-for="tooltip"
                  className="cls-7"
                  d="M1124,2244v24h-48v-24h16v-12h20v12Z"
                  transform="translate(-840 -1724)"
                  onClick={() => this.openDialog(11)}
                />
                <path
                  id="gh-2"
                  data-tip="Girls Hostel"
                  data-for="tooltip"
                  className="cls-7"
                  d="M0-1552v-152l16-16H52v8H64v8h64v16h4v-16h20v44H132v-16h-4v16H88v-24H64v20l-16,16H40v96Z"
                  transform="translate(168 1892)"
                  onClick={() => this.openDialog(12)}
                />
                <path
                  id="staff1-2"
                  data-tip="Staff Quarters"
                  data-for="tooltip"
                  className="cls-7"
                  d="M328,1908v44h20v-44Z"
                  transform="translate(0 -1720)"
                  onClick={() => this.openDialog(13)}
                />
                <path
                  id="guest-2"
                  data-tip="Guest House"
                  data-for="tooltip"
                  className="cls-7"
                  d="M44-1676H4v-4H0v-36H4v-4H44v44Zm-24-28v12h8v-12H20Z"
                  transform="translate(304 1964)"
                  onClick={() => this.openDialog(14)}
                />
                <path
                  id="power-2"
                  data-tip="Power Generators"
                  data-for="tooltip"
                  className="cls-7"
                  d="M104,2220v40h20v-40Z"
                  transform="translate(0 -1724)"
                  onClick={() => this.openDialog(15)}
                />
                <path
                  id="grid-2"
                  data-tip="Grid House"
                  data-for="tooltip"
                  className="cls-7"
                  d="M112,2208h12v-20H112Z"
                  transform="translate(0 -1720)"
                  onClick={() => this.openDialog(16)}
                />
              </g>
            </g>
          </svg>
        </ReactSVGPanZoom>
        <ReactTooltip id="tooltip" />
        <Dialog
          open={this.state.dialogOpen}
          onClose={() => this.setState({ dialogOpen: false })}
        >
          <DialogSurface>
            <DialogHeader>
              <DialogHeaderTitle>{this.state.title}</DialogHeaderTitle>
            </DialogHeader>
            <DialogBody>{this.state.desc}</DialogBody>
            <DialogFooter>
              <DialogFooterButton cancel>Close</DialogFooterButton>
            </DialogFooter>
          </DialogSurface>
          <DialogBackdrop />
        </Dialog>
      </div>
    );
  }
}
export default Maps;
