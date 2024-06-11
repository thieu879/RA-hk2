"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
function Bt8() {
    const [currentTime, setCurrentTime] = (0, react_1.useState)(new Date());
    (0, react_1.useEffect)(() => {
        const timeID = setInterval(() => a(), 1000);
        return () => {
            clearInterval(timeID);
        };
    }, []);
    const a = () => {
        setCurrentTime(new Date());
    };
    const getSeason = (month) => {
        if (month >= 1 && month <= 3) {
            return 'Xuân';
        }
        else if (month >= 4 && month <= 6) {
            return 'Hạ';
        }
        else if (month >= 7 && month <= 9) {
            return 'Thu';
        }
        else {
            return 'Đông';
        }
    };
    const currentMonth = currentTime.getMonth() + 1;
    const currentSeason = getSeason(currentMonth);
    return (<div>
      Bt8:
      <br />
        <br />
        <p>Thời gian hiện tại: {currentTime.toLocaleDateString(undefined, { month: 'long' })}</p>
        <p>Mùa hiện tại là mùa: {currentSeason}</p>
    </div>);
}
exports.default = Bt8;
