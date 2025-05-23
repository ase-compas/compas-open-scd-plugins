export const officialPlugins = [
  {
    name: 'CoMPAS Versions',
    src: '/src/editors/CompasVersions.js',
    icon: 'copy_all',
    default: true,
    kind: 'editor',
  },
  {
    name: 'Open project',
    src: '/src/menu/CompasOpen.js',
    icon: 'folder_open',
    default: true,
    kind: 'menu',
    requireDoc: false,
    position: 'top',
  },
  {
    name: 'Project from CIM',
    src: '/src/menu/CompasCimMapping.js',
    icon: 'input',
    default: true,
    kind: 'menu',
    requireDoc: false,
    position: 'top',
  },
  {
    name: 'Import from API',
    src: '/src/menu/CompasImportFromApi.js',
    icon: 'cloud_download',
    default: false,
    kind: 'menu',
    requireDoc: false,
    position: 'top',
  },
  {
    name: 'Save project',
    src: '/src/menu/CompasSave.js',
    icon: 'save',
    default: true,
    kind: 'menu',
    requireDoc: true,
    position: 'top',
  },
  {
    name: 'Save project as',
    src: '/src/menu/CompasSaveAs.js',
    icon: 'save',
    default: true,
    kind: 'menu',
    requireDoc: true,
    position: 'top',
  },
  {
    name: 'Save as version',
    src: '/src/menu/CompasSaveAsVersion.js',
    icon: 'save',
    default: true,
    kind: 'menu',
    requireDoc: true,
    position: 'top',
  },
  {
    name: '[WIP] Validate using OCL',
    src: '/src/validators/CompasValidateSchema.js',
    icon: 'rule_folder',
    default: false,
    kind: 'validator',
  },
  {
    name: 'Import IEDs',
    src: '/src/menu/CompasImportIEDs.js',
    icon: 'snippet_folder',
    default: true,
    kind: 'menu',
    requireDoc: true,
    position: 'middle',
  },
  {
    name: 'Merge Project',
    src: '/src/menu/CompasMerge.js',
    icon: 'merge_type',
    default: true,
    kind: 'menu',
    requireDoc: true,
    position: 'middle',
  },
  {
    name: 'Update Substation',
    src: '/src/menu/CompasUpdateSubstation.js',
    icon: 'merge_type',
    default: true,
    kind: 'menu',
    requireDoc: true,
    position: 'middle',
  },
  {
    name: 'Compare IED',
    src: '/src/menu/CompasCompareIED.js',
    icon: 'compare_arrows',
    default: true,
    kind: 'menu',
    requireDoc: true,
    position: 'middle',
  },
  {
    name: 'Auto Align SLD',
    src: '/src/menu/CompasAutoAlignment.js',
    icon: 'dashboard',
    default: true,
    kind: 'menu',
    requireDoc: true,
    position: 'middle',
  },
  {
    name: 'Export IED Params',
    src: '/src/menu/ExportIEDParams.js',
    icon: 'download',
    default: false,
    kind: 'menu',
    requireDoc: true,
    position: 'middle',
  },
  {
    name: 'Locamation VMU',
    src: '/src/menu/LocamationVMU.js',
    icon: 'edit_note',
    default: false,
    kind: 'menu',
    requireDoc: true,
    position: 'middle',
  },
  {
    name: 'CoMPAS Settings',
    src: '/src/menu/CompasSettings.js',
    icon: 'settings',
    default: true,
    kind: 'menu',
    requireDoc: false,
    position: 'bottom',
  },
  {
    name: 'Sitipe',
    src: '/src/editors/Sitipe.js',
    icon: 'precision_manufacturing',
    default: true,
    kind: 'editor',
  },
  {
    name: 'Autogen Substation',
    src: '/src/editors/autogen-substation.js',
    icon: 'playlist_add_circle',
    default: true,
    kind: 'menu',
    requireDoc: true,
    position: 'middle',
  }
];
