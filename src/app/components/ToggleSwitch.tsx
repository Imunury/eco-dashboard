import React from 'react';

interface ToggleSwitchProps {
    isOn: boolean;
    onChange: (isChecked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, onChange }) => {
    const handleToggle = () => {
        onChange(!isOn);
    };

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="sr-only"
                checked={isOn}
                onChange={handleToggle}
            />
            <div className={`w-11 h-6 flex items-center bg-gray-200 rounded-full peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 transition-colors duration-300 ease-in-out ${isOn ? 'bg-blue-600' : 'bg-gray-300'}`}>
                <span className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out ${isOn ? 'transform translate-x-5' : ''}`}>
                </span>
                <span className={`absolute text-xs text-white transition-opacity duration-300 ease-in-out ${isOn ? 'opacity-0' : 'opacity-100'}`}>
                    <h3>OFF</h3>
                </span>
                <span className={`absolute text-xs text-white transition-opacity duration-300 ease-in-out ${isOn ? 'opacity-100' : 'opacity-0'}`}>
                    <h3>ON</h3>
                </span>
            </div>
        </label>
    );
};

export default ToggleSwitch;
