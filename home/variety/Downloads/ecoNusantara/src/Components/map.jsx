import domtoimage from 'dom-to-image'; // Jika menggunakan dom-to-image
import { saveAs } from 'file-saver';
import L, { icon } from 'leaflet';
import markerIconUrl from 'leaflet/dist/images/marker-icon.png';
import markerShadowUrl from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import React, { useEffect, useRef, useState } from "react";
import ReactDOMServer from 'react-dom/server';
import { FaBuilding, FaCameraRetro, FaChevronDown, FaCompress, FaExpand, FaEye, FaEyeSlash, FaFileExport, FaGoogle, FaGripLines, FaIcons, FaLayerGroup, FaMapMarkerAlt, FaPlus, FaRulerCombined, FaTextHeight, FaTimes, FaTrashAlt, FaVectorSquare } from 'react-icons/fa';
import { GeoJSON, MapContainer, Marker, Polygon, Polyline, Popup, TileLayer, Tooltip, useMapEvent } from "react-leaflet";
import { useDispatch, useSelector } from 'react-redux';
import * as XLSX from 'xlsx';
import geoJsonKecamatan from '../GeoJson/desa.json';
import geoJsonDataPantai from '../GeoJson/garisPantai.json';
import geoJsonData from '../GeoJson/kecamatan.json';
import geoJsonDataSungai from '../GeoJson/sungai.json';
import { getCoordinate } from '../Store/coordinateSlice';
import kabupatenCirebonBoundary from '../File/cirebon';

const Map = ({
  data, 
  handleHeight, 
  height, 
  handleShowAll,
  showAll,
  dataSubdistrict,
  color,
  customData,
  searchLocation,
  listGeoData
}) => {

  const dispatch = useDispatch()
  
  const [searchData, setSearchData] = useState('')
  const [activeDesa, setActiveDesa] = useState(false)
  const [activePantai, setActivePantai] = useState(false)
  const [activeSungai, setActiveSungai] = useState(false)
  const [activeMenuBatas, setActiveMenuBatas] = useState(false)
  const [lines, setLines] = useState([]);
  const [excelData, setExcelData] = useState([]);
  const [nameFile, setNameFile] = useState('')
  const [activeLineSub, setActiveLineSub] = useState(false)
  const [activeLineMarker, setActiveLineMarker] = useState(false)
  const [activeArea, setActiveArea] = useState(false)
  const [currentPosition, setCurrentPosition] = useState(null);
  const [lineMarkers, setLineMarkers] = useState(null);
  const [center] = useState([-6.7320, 108.5525]);
  const [zoom] = useState(12);
  const [selectIcon, setSelectIcon] = useState('')
  const [activeMenuIcon, setActieMenuIcon] = useState(false)
  const [subdistrictDots, setSubdistrictDots] = useState(false)
  const [coordinates, setCoordinates] = useState([])
  const [activeClick] = useState(false)
  const [activeClick2, setActiveClick2] = useState(null)
  const [selectColor, setSelectColor] = useState(null)
  const [status, setStatus] = useState(false)
  const [activeLayer, setActiveLayer] = useState(false)
  const [activeKecamatan, setActiveKecamatan] = useState(false)
  const [activeRange, setActiveRange] = useState(false);
  const [listLayer, setListLayer] = useState([])
  const [listID, setListID] = useState([])
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  const [startPointPoly, setStartPointPoly] = useState(null);
  const [endPointPoly, setEndPointPoly] = useState(null);
  const [unit, setUnit] = useState('kilometer');
  const [fullScreen, setFullScreen] = useState(false);
  const [activeRangeCustomIcon, setActiveRangeCustomIcon] = useState(false);

  const coorNew = useSelector((state) => state.Coordinate?.coordinate)
  
  const onEachFeature = (feature, layer) => {
    console.log('feature', feature)
    if (feature?.properties && (feature?.properties?.NAMOBJ || feature?.properties?.namobj)) {
      layer.bindTooltip(feature?.properties?.NAMOBJ ?? feature?.properties?.namobj);
    }
  };

  const geoJsonStyle = {
    color: '#87A922',
  };

  const geoJsonStylePantai = {
    color: '#008DDA',
  };

  const geoJsonStyleSungai = {
    color: '#41C9E2',
  };

  const geoJsonStyleKecamatan = {
    color: '#FBC740',
  };

  const geoJsonData1 = geoJsonData;
  const geoJsonData2 = geoJsonDataPantai;
  const geoJsonData3 = geoJsonDataSungai;
  const geoJsonData4 = geoJsonKecamatan;

  useEffect(() => {
    setCoordinates(coorNew)
    if(activeClick) {
      changeColor(color)
    }
    setStatus(false)
  }, [coordinates.length, coorNew.length, status, color, selectColor])

  const changeColor = (newColor) => {
    setSelectColor(newColor);
    setActiveClick2(false)
    setTimeout(() => {
      setActiveClick2(true)
    }, 100)
  };

  const circleCoordinates = (centerLat, centerLong, radiusInKm) => {
    const numPoints =  100; // Number of points along the circle
    const radiusInRadians = radiusInKm /  6371; // Earth's average radius in km
    let angleStep =  2 * Math.PI / numPoints;
    let coordinates = [];
  
    for (let i =  0; i <= numPoints; i++) {
      let angle = i * angleStep;
      let dx = radiusInRadians * Math.cos(angle);
      let dy = radiusInRadians * Math.sin(angle);
      let newLong = centerLong + (dx * (180 / Math.PI));
      let newLat = centerLat + (dy * (180 / Math.PI));
      coordinates.push([newLat, newLong]);
    }
  
    return coordinates;
  };

  // Blok area koordinat (bgcolor dan border)
  const areas = data?.[0]?.coordinate?.map((marker) => {
    const lat = parseFloat(marker.lat);
    const long = parseFloat(marker.long);
    return {
      name: marker.name_location,
      condition: marker.condition ?? '',
      coordinates: circleCoordinates(lat, long, 0.3)
    };
  });

  useEffect(() => {
    const linesData = [...kabupatenCirebonBoundary.map((marker) => [marker[0], marker[1]]), [kabupatenCirebonBoundary[0][0], kabupatenCirebonBoundary[0][1]]];
    setLines(linesData);
    const linesDataMarker = [
        data?.[0]?.coordinate?.map((marker) => 
        [parseFloat(marker.lat), parseFloat(marker.long)]), 
        [parseFloat(data?.[0]?.coordinate[0]?.lat), parseFloat(data?.[0]?.coordinate[0]?.long)
    ]];

    setLineMarkers(linesDataMarker);
    setStatus(false)

  }, [kabupatenCirebonBoundary?.length, status, data?.[0]?.coordinate.length, nameFile, subdistrictDots]);

  const MapEventsHandler = () => {
    if(activeClick) {
      useMapEvent('click', (value) => {
        const data = [
          value?.latlng?.lat,
          value?.latlng?.lng
        ]
        dispatch(getCoordinate(data))
        setCoordinates((prev) => [...prev, data])
      })
    }
    useMapEvent('moveend', (event) => {
      const map = event.target;
      const center = map.getCenter(); 
      setCurrentPosition([center.lat, center.lng]); 
    });

    return null;
  }

  const exportToGeoJSON = () => {
    const geoJSON = {
      type: 'FeatureCollection',
      features: data?.[0]?.coordinate?.map((point, index) => ({
        type: 'Feature',
        properties: { id: index + 1 },
        geometry: {
          type: 'Point',
          coordinates: [point.long, point.lat]
        }
    }))
  };

    // Ubah objek GeoJSON menjadi string
  const geoJSONString = JSON.stringify(geoJSON, null, 2);

    // Buat blob dari string GeoJSON
    const geoJSONBlob = new Blob([geoJSONString], { type: 'application/json' });

    // Simpan sebagai file GeoJSON menggunakan FileSaver.js
    saveAs(geoJSONBlob, 'geospasial.geojson');
  };

  const CustomIcon = (number) => (
    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
      <span className="text-white">{number}</span>
    </div>
  );

  const createCustomIcon = (index) => {
    return L.divIcon({
      html: ReactDOMServer.renderToString(<CustomIcon number={index} />),
      iconSize: [30,  30], 
      className: '', 
    });
  };

  const myIcon = L.divIcon({
    className: 'my-div-icon',
    html: `<p style="font-size:  26px;">${subdistrictDots ? '🏤' : selectIcon}</p>`, 
    iconAnchor: [10,  25],
  });

  const defaultIcon = icon({
    iconUrl: markerIconUrl,
    shadowUrl: markerShadowUrl,
  });

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setNameFile(file.name)
    const reader = new FileReader();
    
    reader.onload = (event) => {
      const binaryString = event.target.result;
      const workbook = XLSX.read(binaryString, { type: 'binary' });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      const findFieldIndex = (fieldOptions) => {
        for (let i = 0; i < data?.[0].length; i++) {
          const field = data?.[0][i].toLowerCase();
          if (fieldOptions.some(option => field.includes(option.toLowerCase()))) {
            return i;
          }
        }
        return -1; 
      };
      
      // Mengonversi data Excel menjadi array of objects dengan property name_location, lat, dan long
      const nameIndex = findFieldIndex(["Nama lokasi", "nama lokasi", "lokasi", "Daftar data", 'daftar data", "nama", "Daftar Data", "Nama data', "Data", "Nama lokasi", "nama lokasi", "DAFTAR DATA", "NAMA DATA", "Daftar_data", "Nama _lokasi"]);
      const latIndex = findFieldIndex(["Latitude", "latitude", "lat", "Lat", "LAT", "LATITUDE"]);
      const longIndex = findFieldIndex(["Longitude", "longitude", "long", "Long", "lng", "LONG", "LONGITUDE", "Longitudinal", "LONGITUDINAL"]);

      // Mengambil data sesuai dengan indeks yang telah ditemukan
      const convertedData = data.slice(1).map((row) => ({
        name_location: nameIndex !== -1 ? row[nameIndex] : '',
        lat: latIndex !== -1 ? row[latIndex] : '',
        long: longIndex !== -1 ? row[longIndex] : ''
      })).filter((obj) => obj.name_location !== '' && obj.lat !== '' && obj.long !== '' && obj.name_location !== undefined && obj.lat !== undefined && obj.long !== undefined);

      // Menyimpan data yang sudah dikonversi
      setExcelData(convertedData);
    };

    reader.readAsBinaryString(file);
  };

  const captureRef = useRef(null);
  const downloadImage = () => {
    const node = captureRef.current;
    if (node) {
      domtoimage.toPng(node)
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = 'map.png';
          link.href = dataUrl;
          link.click();
        })
        .catch((error) => {
          console.error('Oops, something went wrong!', error);
        });
    }
  };

  const filteredData = excelData.length > 0 ? excelData : (showAll ? data?.flatMap(entry => entry.coordinate) : ((data && data.length > 0) ? data[0]?.coordinate : []));

  const checkForDisaster = (conditions) => {
    for (let i = 0; i < conditions?.length; i++) {
      if (conditions[i].label === "Rawan bencana") {
        return true;
      }
    }
    return false; 
  }

  const randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

  const handleAddLayer = (e) => {
    const { title_id, coordinate } = e;
    const newList = coordinate.map((item) => ({
      ...item,
      color: randomColor // Gunakan warna acak yang disimpan
    }));
    setListLayer((prevState) => ({
      ...prevState,
      coordinate: Array.isArray(prevState.coordinate) ? [...prevState.coordinate, ...newList] : [...newList]
    }));
    setListID((prevIDs) => [...prevIDs, title_id]);
  };

  const handleDeleteByTitleId = (titleIdToDelete) => {
    setListLayer((prevState) => ({
      ...prevState,
      coordinate: prevState.coordinate.filter((coord) => coord.title_id !== titleIdToDelete)
    }));
  };

  const formatDistance = (distance) => {
    if (unit === 'kilometer') {
      return (distance / 1000).toFixed(2);
    } else {
      return (Math.round(distance));
    }
  };

  useEffect(() => {
    if (startPoint !== null && endPoint !== null) {
      setActiveRangeCustomIcon(true);
      setStartPointPoly([filteredData[startPoint].lat, filteredData[startPoint].long]);
      setEndPointPoly([filteredData[endPoint].lat, filteredData[endPoint].long]);

      console.log('startPOintPOly', [filteredData[startPoint].lat, filteredData[startPoint].long])
      console.log('endPOintPOly', [filteredData[endPoint].lat, filteredData[endPoint].long])
    }
  }, [startPoint, endPoint]);

  const calculateDistance = () => {
    if (startPoint && endPoint && unit) {
      let point1 = L.latLng([filteredData[startPoint].lat, filteredData[startPoint].long]);
      let point2 = L.latLng([filteredData[endPoint].lat, filteredData[endPoint].long]);
      
      let distance = point1.distanceTo(point2);
      
      return formatDistance(distance);
    }
  };

  return (
    <>
      <div className='relative w-full h-full'>
    
      <div className={`absolute z-[3333] w-full md:w-[42vw] h-screen ${activeLayer ? 'left-[0%]' : 'left-[-100%] duration-300'} top-[0px] bg-white shadow-lg rounded-[12px] p-2 md:p-4 duration-200`}>
        <div className='w-full px-3 flex items-center justify-between'>
          <input name="searchData" value={searchData} onChange={(e) => setSearchData(e.target.value)} type="text" className="w-[85%] rounded-[10px] bg-white my-2 px-3 py-3 text-slate-600 outline-0 border border-slate-300 text-[13px]" placeholder="Cari judul data..." />
          <div onClick={() => setActiveLayer(false)} className='rounded-full md:rounded-[8px] md:text-[16px] text-[12px] md:p-0 p-2 md:w-[46px] md:h-[46px] bg-red-500 ml-2 flex items-center justify-center text-white cursor-pointer hover:brightness-[90%] active:scale-[0.98]'>
            <FaTimes />
          </div>
        </div>

          <div className='w-full h-full pb-12 pt-3 overflow-y-auto'>
            {
              listGeoData && listGeoData?.length > 0 ? (
                listGeoData
                ?.filter((data) => {
                  if(searchData !== '') {
                    return (data?.title.toLowerCase()).includes(searchData.toLowerCase())
                  }
                  return true
                })
                ?.map((data, index) => {
                const isAdded = listID.includes(data?.title_id);
                return (
                  <div key={index} className='w-full flex items-center justify-between px-3 mb-4 py-2'>
                    <div className='w-[80%] h-[30px] rounded-full flex items-center p-2'>
                      <FaMapMarkerAlt />
                      <p className='ml-3 overflow-hidden w-full md:w-[90%] overflow-ellipsis whitespace-nowrap'>{data?.title}</p>
                    </div>
                    <div onClick={() => {
                      if(isAdded) {
                        setListID((prevIDs) => prevIDs.filter((id) => id !== data?.title_id));
                        handleDeleteByTitleId(data?.title_id)
                      } else {
                        handleAddLayer(data)
                      }
                    }} 
                    className={`w-[10%] rounded-[4px] ${isAdded ? 'bg-red-500' : 'bg-blue-500'} flex justify-center text-white px-2 py-2 text-[12px] cursor-pointer active:scale-[0.98] hover:brightness-[90%]`}>
                      {
                        isAdded ? (
                          <FaTrashAlt />
                        ):
                          <FaPlus />
                      }
                    </div>
                  </div>
                )})
              ):
                null
            }
          </div>
      </div>
     
      <div className={`absolute z-[3333] w-[31vw] h-screen ${activeRange ? 'left-[0%]' : 'left-[-100%] duration-300'} top-[0px] bg-white shadow-lg rounded-[12px] p-4 duration-200`}>
        <div className='w-full px-3 flex items-center justify-between'>
          <h2 className='text-[16px] relative top-1'>Jarak Antar Titik</h2>
          <div onClick={() => {setActiveRange(false), setActiveRangeCustomIcon(false)}} className='rounded-[8px] w-[46px] h-[46px] bg-red-500 ml-2 flex items-center justify-center text-white cursor-pointer hover:brightness-[90%] active:scale-[0.98]'>
            <FaTimes />
          </div>
        </div>

        <hr className='mt-5 w-[92%] mx-auto' />

          <div className='w-full h-full pb-12 pt-6 px-2 overflow-y-auto'>
            <div className='w-full h-max bg-white border pr-3 border-slate--200 rounded-[12px]'>
              <select name="startPoint" onChange={(e) => setStartPoint(e.target.value)} id="startPoint" className='w-full outline-0 border-0 p-4 bg-transparent rounded-[12px]'>
                <option value="">Pilih Koordinat Awal</option>
                {
                  filteredData && filteredData?.length > 0 ? (
                    filteredData?.map((data, index) => (
                      <option key={index} value={index}>{data?.name_location}</option>
                    ))
                  ):
                    <option value="">Data tidak ada!</option>
                }
              </select>
            </div>

            <div className='w-full h-max bg-white border  mt-5 pr-3 border-slate--200 rounded-[12px]'>
              <select name="endPoint" onChange={(e) => setEndPoint(e.target.value)} id="endPoint" className='w-full outline-0 border-0 p-4 bg-transparent rounded-[12px]'>
              <option value="">Pilih Koordinat Akhir</option>
              {
                  filteredData && filteredData?.length > 0 ? (
                    filteredData?.map((data, index) => (
                      <option key={index} value={index}>{data?.name_location}</option>
                    ))
                  ):
                    <option value="">Data tidak ada!</option>
                }
              </select>
            </div>

            <div className='w-full h-max bg-white border  mt-5 pr-3 border-slate--200 rounded-[12px]'>
              <select name="unit" onChange={(e) => setUnit(e.target.value)} id="unit" className='w-full outline-0 border-0 p-4 bg-transparent rounded-[12px]'>
                <option key={1} value="">Pilih Satuan Jarak</option>
                <option key={3} value='kilometer'>kilometer</option>
                <option key={2} value='meter'>meter</option>
              </select>
            </div>

            <div className='w-full bg-white flex justify-center items-center h-max border mt-7 p-5 border-[2px] border-dashed border-blue-500 text-blue-600 text-center border-slate--200 rounded-[12px]'>
              <p>{calculateDistance() ?? 0}</p><p className='ml-2'><b>{unit}</b></p>             
            </div>
          </div>
      </div>

        {/* Tombol tambah koordinat dan pengaturan */}
        <div className="w-max z-[444] flex items-center h-[68px] py-[14px] pl-4 rounded-bl-[32px] absolute top-0 right-2">
          <div className={`w-max ${activeClick ? 'hidden' : 'flex'} items-center top-4 mr-3`}>
            <div title='FullScreen' onClick={() => setFullScreen(!fullScreen)} className={`${fullScreen ? 'bg-green-200 fixed bottom-6 right-4' : 'bg-white bottom-36 w-[40px] h-[40px]'} mr-4 cursor-pointer hover:bg-green-200 z-[22222223] md:px-2 md:py-2 flex items-center justify-center text-center rounded-full text-[16px] border border-slate-700`}>{fullScreen ? <FaCompress /> : <FaExpand />}
            </div>
            <div title='Jarak' onClick={() => setActiveRange(!activeRange)} className={`${activeRange ? 'bg-green-200' : 'bg-white'} mr-4 cursor-pointer hover:bg-green-200 z-[22222] w-max h-max px-4 py-2 hidden md:flex items-center justify-center text-center rounded-full text-[16px] border border-slate-700 right-0 top-36`}>Jarak <FaRulerCombined className='ml-3' />
            </div>
            <div title='Multi layar' onClick={() => setActiveLayer(!activeLayer)} className={`${activeLayer ? 'bg-green-200' : 'bg-white'} mr-4 cursor-pointer hover:bg-green-200 z-[22222] w-[45px] h-[45px] md:w-max md:h-max md:px-4 md:py-2 flex items-center justify-center text-center rounded-full text-[16px] border border-slate-700 right-0 top-36`}><span className='hidden md:flex mr-2'>Layer</span> <FaLayerGroup />
            </div>
            <div title='Kotak area koordinat' onClick={() => subdistrictDots ? null : setActiveArea(!activeArea)} className={`${activeArea ? 'bg-green-200' : 'bg-white'} ${subdistrictDots ? 'cursor-not-allowed bg-red-400 before:absolute before:h-[50px] before:w-[3px] before:rotate-[40deg] before:bg-red-400 text-slate-400' : 'cursor-pointer active:scale-[0.98] hover:bg-green-200'} z-[22222] w-max h-max px-4 py-2 hidden md:flex items-center justify-center text-center rounded-full text-[16px] border border-slate-700 top-4 right-4`}>Area titik <FaVectorSquare className="ml-3" /></div>
            <div onClick={() => exportToGeoJSON()} className={`bg-white hover:bg-green-200 cursor-pointer active:scale-[0.98] z-[22222] w-max h-max px-4 ml-4 py-2 hidden md:flex items-center justify-center text-center rounded-full text-[16px] border border-slate-700 top-4`}>GeoJSON <FaFileExport className="ml-3" /></div>
            <div title='Bukan google map' className="hidden md:flex items-center top-4 mr-3">
              <div title='Lihat garis antar koordinat' onClick={() => setActiveLineMarker(!activeLineMarker)} className={`${activeLineMarker ? 'bg-green-200' : 'bg-white'} ml-4 cursor-pointer active:scale-[0.98] hover:bg-green-200 z-[22222] w-[45px] h-[45px] px-2 py-2 flex items-center justify-center text-center rounded-full text-[16px] border border-slate-700 right-0 top-36`}><FaGripLines /></div>
              <div title='Layar tinggi penuh' onClick={() => handleHeight()} className={`${height ? 'bg-green-200' : 'bg-white'} ml-4 cursor-pointer active:scale-[0.98] hover:bg-green-200 z-[22222] w-[45px] h-[45px] px-2 py-2 flex items-center justify-center text-center rounded-full text-[16px] border border-slate-700 right-0 top-36`}><FaTextHeight /></div>
            </div>
            <div title='Area perbatasan kabupaten' onClick={() => setActiveMenuBatas(!activeMenuBatas)} className={`${activeMenuBatas ? 'bg-green-200' : 'bg-white'} hover:bg-green-200 cursor-pointer z-[22222] w-max h-max px-4 py-2 flex items-center justify-center text-center rounded-full text-[16px] border border-slate-700 top-4`}>Perbatasan <FaChevronDown className={`${activeMenuBatas ? 'rotate-[-180deg]' : 'rotate-[0deg]'} duration-300 text-[14px] ml-3`} />
              <div className={`absolute h-max w-max mr-10 justify-between z-[33] flex flex-col ${activeMenuBatas ? 'bottom-[-230px] opacity-[1] block' : 'bottom-[-160px] hidden opacity-[0]'} duration-100 text-left rounded-[14px] bg-white p-4 shadow-lg`}>
                <div className='w-flex items-center mb-3 h-[30px]'>
                  <input type="checkbox" name='kabupaten' onClick={() => setActiveLineSub(!activeLineSub)} className='mr-2 scale-[1.3] rounded-[10px]' /> Batas Kabupaten
                </div>
                <div className='w-flex items-center mb-3 h-[30px]'>
                  <input type="checkbox" name='kecamatan' onClick={() => setActiveKecamatan(!activeKecamatan)} className='mr-2 scale-[1.3] rounded-[10px]' /> Batas Kecamatan
                </div>
                <div className='w-flex items-center mb-3 h-[30px]'>
                  <input type="checkbox" name='kabupaten' onClick={() => setActiveDesa(!activeDesa)} className='mr-2 scale-[1.3] rounded-[10px]' /> Batas Desa
                </div>
                <div className='w-flex items-center mb-3 h-[30px]'>
                  <input type="checkbox" name='kabupaten' onClick={() => setActivePantai(!activePantai)} className='mr-2 scale-[1.3] rounded-[10px]' /> Garis Pantai
                </div>
                <div className='w-flex items-center h-[30px]'>
                  <input type="checkbox" name='kabupaten' onClick={() => setActiveSungai(!activeSungai)} className='mr-2 scale-[1.3] rounded-[10px]' /> Jalur Sungai
                </div>
              </div>
            </div>

            <div title='Ganti ikon marker' onClick={() => subdistrictDots ? null : setActieMenuIcon(!activeMenuIcon)} className={`overflow-hidden ${activeMenuIcon && !subdistrictDots ? 'bg-green-200' : 'bg-white'} ${subdistrictDots ? 'cursor-not-allowed bg-red-400 before:absolute before:h-[42px] before:w-[3px] before:rotate-[40deg] before:bg-red-400 text-slate-400' : 'cursor-pointer active:scale-[0.98] hover:bg-green-200'} ml-4 z-[22222] w-[45px] h-[45px] px-2 py-2 hidden md:flex items-center justify-center text-center rounded-full text-[16px] border border-slate-700 right-0 top-52`}><FaIcons /></div>
            <div className={`w-[45px] absolute top-20 duration-200 ease ${activeMenuIcon && !subdistrictDots ? 'right-3' : 'right-[-55px]'} bg-white  overflow-hidden flex-col h-max border border-slate-700 rounded-full flex lfex-col items-center justify-center`}>
              <div onClick={() => setSelectIcon('🏢')} className='text-center flex justify-center items-center cursor-pointer active:scale-[0.98] hover:bg-green-200 border-b w-full py-5 min-h-[50px] border-slate-700 text-black'>
                <p>🏢</p>
              </div>
              <div onClick={() => setSelectIcon('🏫')} className='text-center flex justify-center items-center cursor-pointer active:scale-[0.98] hover:bg-green-200 border-b w-full py-5 min-h-[50px] border-slate-700 text-black'>
                <p>🏫</p>
              </div>
              <div onClick={() => setSelectIcon('🏭')} className='text-center flex justify-center items-center cursor-pointer active:scale-[0.98] hover:bg-green-200 border-b w-full py-5 min-h-[50px] border-slate-700 text-black'>
                <p>🏭</p>
              </div>
              <div onClick={() => setSelectIcon('')} className='text-center flex justify-center items-center cursor-pointer active:scale-[0.98] hover:bg-green-200 border-b w-full py-5 min-h-[50px] border-slate-700 text-black'>
                <p>📍</p>
              </div>
            </div>

          </div>
        </div>
        <div title='Area perbatasan kabupaten' onClick={() => setActiveLineSub(!activeLineSub)} className={`absolute ${activeLineSub ? 'bg-green-200' : 'bg-white'} hover:bg-green-200 cursor-pointer active:scale-[0.98] z-[22222] w-max h-max px-4 py-2 ${activeClick ? 'flex' : 'hidden'} items-center justify-center text-center rounded-full text-[16px] border border-slate-700 right-4 top-[13px]`}>Batas kabupaten <FaVectorSquare className="ml-3" /></div>
        
        <div className='absolute right-2 pl-5 md:pl-7 bottom-4 w-full flex items-center justify-between'>
          <div className='w-max flex items-center'>
            <div className={`z-[552] ml-0 w-max h-max px-4 py-2 flex items-center justify-center text-center bg-white rounded-full text-[16px] border border-slate-700 bottom-4`}>{ currentPosition?.[0].toFixed(6) + `  |  ` + currentPosition?.[1].toFixed(6) ?? 0 }</div>
          </div>
          <div title='FullScreen' onClick={() => setFullScreen(!fullScreen)} className={`${fullScreen ? 'bg-green-200 fixed bottom-6 right-4 w-[50px] h-[50px]' : 'bg-white bottom-36 w-[40px] h-[40px]'} mr-4 cursor-pointer hover:bg-green-200 z-[22222223] md:px-2 md:py-2 flex md:hidden items-center justify-center text-center rounded-full text-[16px] border border-slate-700 ml-4`}>{fullScreen ? <FaCompress /> : <FaExpand />}
          </div>
          <div className={`w-max ${activeClick ? 'hidden' : 'hidden md:flex'} items-center`}>
            <div title='FullScreen' onClick={() => setFullScreen(!fullScreen)} className={`${fullScreen ? 'bg-white fixed top-3 right-0' : 'hidden'} mr-4 cursor-pointer hover:bg-green-200 z-[22222223] w-[50px] h-[50px] text-[22px] flex items-center justify-center text-center rounded-full text-[16px] border border-slate-700`}>{fullScreen ? <FaCompress /> : <FaExpand />}
            </div>
            <div title='Kantor kecataman' onClick={() => setSubdistrictDots(!subdistrictDots)} className={`${subdistrictDots ? 'bg-green-200' : 'bg-white'} mr-3 hover:bg-green-200 cursor-pointer active:scale-[0.98] z-[22222] w-[40px] h-[40px] py-2 flex items-center justify-center text-center rounded-full text-[16px] border border-slate-700 top-4`}><FaBuilding /></div>
            <div title='Lihat semua koordinat' onClick={() => handleShowAll()} className={`${showAll ? 'bg-green-200' : 'bg-white'} mr-3 hover:bg-green-200 cursor-pointer active:scale-[0.98] z-[22222] w-[40px] h-[40px] py-2 flex items-center justify-center text-center rounded-full text-[16px] border border-slate-700 top-4`}>{showAll ? <FaEyeSlash /> : <FaEye />}</div>
            <div title='Ambil gambar peta' onClick={() => window.location.href = 'https://www.google.com/maps/place/Cirebon,+Kota+Cirebon,+Jawa+Barat/@-6.7428609,108.5128389,13z/data=!3m1!4b1!4m15!1m8!3m7!1s0x2e6f1d0f69dbc5d5:0x301e8f1fc28ba20!2sKabupaten+Cirebon,+Jawa+Barat!3b1!8m2!3d-6.6898876!4d108.4750846!16zL20vMGdjN3h6!3m5!1s0x2e6ee2649e6e5bbb:0x70a07638a7fe12fe!8m2!3d-6.7320229!4d108.5523164!16s%2Fg%2F11bc5j9s76?entry=ttu'} className={`z-[33333] active:bg-green-200 bg-white mr-3 hover:brightness-[90%] cursor-pointer active:scale-[0.98] z-[22222] w-[40px] h-[40px] py-2 flex items-center justify-center text-center rounded-full text-[16px] border border-slate-700 top-4`}><FaGoogle /></div>
            <div title='Ambil gambar peta' onClick={() => downloadImage()} className={`z-[33333] active:bg-green-200 bg-white mr-3 hover:brightness-[90%] cursor-pointer active:scale-[0.98] z-[22222] w-[40px] h-[40px] py-2 flex items-center justify-center text-center rounded-full text-[16px] border border-slate-700 top-4`}><FaCameraRetro /></div>
          </div>
        </div>
        <div className={`${fullScreen ? 'fixed top-0 left-0 w-screen h-screen z-[2222222] overflow-hidden' : 'h-[500px] w-full'}`} ref={captureRef}>
          <MapContainer 
            className="w-full mt-[120px]" 
            center={center} 
            zoom={zoom} 
            scrollWheelZoom={true}  
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            dragging={true}
            easeLinearity={0.35}
          >
          <MapEventsHandler />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

          {
            activeDesa ? (
              <GeoJSON data={geoJsonData1} style={geoJsonStyle} onEachFeature={onEachFeature} />
            ):
              null
          }
          {
            activePantai ? (
              <GeoJSON data={geoJsonData2} style={geoJsonStylePantai} onEachFeature={onEachFeature} />
            ):
              null
          }
          {
            activeSungai ? (
              <GeoJSON data={geoJsonData3} style={geoJsonStyleSungai} onEachFeature={onEachFeature} />
            ):
              null
          }
          {
            activeKecamatan ? (
              <GeoJSON data={geoJsonData4} style={geoJsonStyleKecamatan} onEachFeature={onEachFeature} />
            ):
              null
          }

          {
            (subdistrictDots ? dataSubdistrict : filteredData)
            .filter((con) => {
              if (searchLocation && searchLocation !== '') {
                return (con.name_location.toLowerCase()).includes(searchLocation.toLowerCase());
              }
              return true;
            })
            .map((marker, index) => (
                <Marker 
                  key={index} 
                  position={[marker.lat, marker.long]} 
                  icon={selectIcon !== '' ? myIcon : subdistrictDots ? myIcon : defaultIcon}
                  >
                    {
                      subdistrictDots ? (
                        null
                      ):
                      <Popup>
                        <div className='flex flex-col'>
                          <div className='relative overflow-hidden mb-2 rounded-[12px] w-full h-[160px]'>
                            <img src={marker?.thumbnail} onClick={() => {window.location.href = marker?.thumbnail, '__blank' }} alt="thumbnail" className='cursor-pointer hover:scale-[1.2] duration-300 hover:brightness-[70%]' />
                          </div>
                          <small className='text-[12px] rounded-[8px] hover:brightness-[90%] duration-200 py-3 mb-4 mt-2 bg-blue-700 text-white text-center' onClick={() => {window.location.href = marker?.link, '__blank' }}>Lihat di google map</small>
                          <div className='w-[300px] flex flex-wrap items-center'>
                            {
                              marker.condition && marker.condition.slice(0, 3)
                              .map((con, index) => (
                                <div className='w-max rounded-full bg-white border border-slate-300 h-[35px] mb-2 px-3 flex items-center'>
                                  <p key={index}>{con.label} {con.icon}</p>
                                  <div className='w-[6px] h-1'></div>
                                </div>
                              ))
                            }
                          </div>
                        </div>
                        <p className='text-center mt-[-10px]'>
                          {marker?.name_location}
                        </p>
                        <hr />
                        <p className='text-center mt-[-10px]'>
                          {marker?.address ?? 'Alamat tidak tersedia'}
                        </p>
                      </Popup>
                    }
                  <Tooltip sticky>{(subdistrictDots ? marker.name_subdistrict : marker.name_location)}</Tooltip> {/* Label hanya muncul saat hover */}
                </Marker>
            ))
          }

          {
            listLayer && setListID.length > 0 ? (
              listLayer?.coordinate?.filter((con) => {
                if (searchLocation && searchLocation !== '') {
                  return (con.name_location.toLowerCase()).includes(searchLocation.toLowerCase());
                }
                return true;
              })
              ?.map((marker, index) => (
                  <Marker key={index} position={[marker.lat, marker.long]} icon={L.divIcon({ 
                    html: `
                      <div class="w-6 h-6 rounded-full flex justify-center items-center" style="background-color: ${marker.color};">
                      </div>
                    ` 
                  })}>
                      {
                        subdistrictDots ? (
                          null
                        ):
                        <Popup>
                          <div className='flex flex-col'>
                            <div className='relative overflow-hidden mb-2 rounded-[12px] w-full h-[160px]'>
                              <img src={marker?.thumbnail} onClick={() => {window.location.href = marker?.thumbnail, '__blank' }} alt="thumbnail" className='cursor-pointer hover:scale-[1.2] duration-300 hover:brightness-[70%]' />
                            </div>
                            <small className='text-[12px] rounded-[8px] hover:brightness-[90%] duration-200 py-3 mb-4 mt-2 bg-blue-700 text-white text-center' onClick={() => {window.location.href = marker?.link, '__blank' }}>Lihat di google map</small>
                            <div className='w-[300px] flex flex-wrap items-center'>
                              {
                                marker.condition && marker.condition.slice(0, 3)
                                .map((con, index) => (
                                  <div className='w-max rounded-full bg-white border border-slate-300 h-[35px] mb-2 px-3 flex items-center'>
                                    <p key={index}>{con.label} {con.icon}</p>
                                    <div className='w-[6px] h-1'></div>
                                  </div>
                                ))
                              }
                            </div>
                          </div>
                          <p className='text-center mt-[-10px]'>
                            {marker.name_location}
                          </p>
                          <hr />
                          <p className='text-center mt-[-10px]'>
                            {marker?.address ?? 'Alamat tidak tersedia'}
                          </p>
                        </Popup>
                      }
                    <Tooltip sticky>{(subdistrictDots ? marker.name_subdistrict : marker.name_location)}</Tooltip> {/* Label hanya muncul saat hover */}
                  </Marker>
              ))
            ):
              null
          }

          {
            activeClick ? (
              coordinates?.filter((data) => {
                if(searchLocation !== '') {
                  return (data?.name_location.toLowerCase()).includes(searchLocation?.toLowerCase())
                }
                  return true
                })
                .map((data, index) => (
                <Marker 
                  key={index} 
                  position={[data?.[0], data[1]]} 
                  icon={createCustomIcon(index + 1)}
                  >
                </Marker>
              ))
            ):
              null
          }

            {/* Garis kabupaten perbatasan */}
          {activeLineSub && lines && lines?.length > 1 && (
            <Polygon positions={lines} color="#008ada" />
          )}

          {
            activeClick && activeClick2 && coordinates && coordinates.length > 1 && (
              <Polygon positions={coordinates} color={`${selectColor ? selectColor : '#00eada'}`} />
            )
          }

          {
            customData && customData.length > 0 ? (
              customData?.map((data, index) => (
                <Polygon key={index} positions={data?.coordinates} color={`${data?.color}`}>
                  <Popup>
                      <div className='flex mb-3 border-b border-slate-300 pb-2 items-center'>
                      <b className='mr-2'>Nama :</b> {data?.name}
                      </div>
                      <div className='flex mb-3 border-b border-slate-300 pb-2 items-center'>
                        <b className='mr-2'>Luas area :</b> {data?.wide ?? 0} {data?.typeWide ?? null}
                      </div>
                      <div className='flex mb-3 border-b border-slate-300 pb-2 items-center'>
                        <b className='mr-2'>Tipe area :</b> {data?.type_area ?? '-'}
                      </div>
                      <div className='flex mb-3 border-b border-slate-300 pb-2 items-center'>
                        <b className='mr-2'>Tipe kerawanan :</b> {data?.type_danger ?? '-'}
                      </div>
                      <div className='flex mb-3 border-b border-slate-300 pb-2 items-center'>
                        <b className='mr-2'>Deskripsi :</b> {data?.description ?? ''} 
                      </div>
                    </Popup>
                </Polygon>
              ))
            ):
              null
          }
            
          {/* Blok area koordinat */}
          {activeArea && areas.map((area, index) => (
            <Polygon key={index} positions={area.coordinates} color={checkForDisaster(area?.condition) ? "red" : "blue"} fillColor={checkForDisaster(area?.condition) ? "red" : "green"} fillOpacity={0.4}>
              <Tooltip>{area.name}</Tooltip>
            </Polygon>
          ))}

          {/* Garis antar marker */}
          {
            activeLineMarker ? (
              <Polyline positions={lineMarkers} color="#008ada" />
            ):
              null
          }
          {
            activeRangeCustomIcon ? (
              <Polyline positions={[startPointPoly, endPointPoly]} color="black">
                <Tooltip>{calculateDistance()} {unit}</Tooltip>
              </Polyline>
            ):
              null
          }

          </MapContainer>
        </div>

      </div>
    </>
  );
};


export default Map