import Button from "./Button";

const List = () => {
        return [
            <li key={1}>New render types: fragments and strings (This component is an array!)</li>,
            <li key={2}>Better error handling (Click on the button to view how this works.) <Button/></li>,
            <li key={3}>Portals</li>,
            <li key={4}>Better server-side rendering</li>,
            <li key={5}>Support for custom DOM attributes</li>,
            <li key={6}>Reduced file size</li>,
        ]
    }

export default List;