const V17 = () => {
    return (
        <div>
            <h2>React v17.x</h2>
            <p>React version 17 was released onn October 20, 2020, with the goal of making web applications made with previous versions of react easier to migrate or upgrade to the newest version.</p>
            <span>Here are some of the important updates in v17:</span>
            <ul>
                <li key={7}>No new features - this means that it does not add any new developer centric features</li>
                <li key={8}>Changes in Event Delegation: Event handlers will be attached at the root DOM container. (just like this project)</li>
                <li key={9}>New JSX Transform - The new JSX transform is optional. The essence of this feature is to change how the React compiles it to Javascript, not needing to import the React library itself.</li>
            </ul>
        </div>
    );
}

export default V17;