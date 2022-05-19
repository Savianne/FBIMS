const default_settings = {
    name_format: 'LFM',
    sort_by: 'name',
    order: 'A',
    limit: '20',
    table_view: 'CUI',
}

function getSettingsFromDb() {
    return new Promise((resolve, reject) => {
        resolve({
            name_format: 'LFM',
            sort_by: 'name',
            order: 'A',
            limit: '50',
            table_view: 'CSV',
        })
    })
}

export function masterlistSettingsToggleReducer(state = false, action) {
    //const setting_from_db = await getSettingsFromDb();

    switch(action.type) {
        case "UPDATE_TABLE_SETTINGS":
            state = {...action.payload};
            return state;
        break;
        default:
            return state;
    }
}