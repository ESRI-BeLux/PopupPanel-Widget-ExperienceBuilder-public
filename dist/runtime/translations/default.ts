export interface languageMessages {
    _widgetLabel: string
    panelTitle: string
    edit: string
    create: string
}

export const defaultMessages: languageMessages = {
    _widgetLabel: 'Panneau contextuel (Esri Belux)',
    panelTitle: 'Panneau contextuel',
    edit: 'Modifier',
    create: 'Créer',
}

// workaround: we make a ts because when deployed the nls is not working
export const frMessages: languageMessages = {
    _widgetLabel: 'Panneau contextuel (Esri Belux)',
    panelTitle: 'Panneau contextuel',
    edit: 'Modifier',
    create: 'Créer',
}
