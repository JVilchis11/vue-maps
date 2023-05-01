export interface ExampleStateInterface {
    connected: boolean;
    events:[]
}

function state(): ExampleStateInterface {
    return {
        connected: true,
        events:[]
    }
}

export default state;