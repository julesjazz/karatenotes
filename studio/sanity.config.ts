import {createConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {
  dashboardTool,
  projectUsersWidget,
  projectInfoWidget,
} from '@sanity/dashboard';
import {documentListWidget} from 'sanity-plugin-dashboard-widget-document-list';
// TODO: VISION
import {colorInput} from '@sanity/color-input';
import {codeInput} from '@sanity/code-input';
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash';
import {media} from 'sanity-plugin-media';
import {schemaTypes} from './schemas';

export default createConfig({
  name: 'default',
  title: 'karatenotes',

  projectId: 'e8bs5ztm',
  dataset: 'production',

  plugins: [
    deskTool(),
    dashboardTool({
      widgets: [
        projectInfoWidget(),
        projectUsersWidget(),
        documentListWidget({
          title: 'Documents List',
          // TODO: configure documents
        }),
      ],
    }),
    // VISION placeholder
    media(),
    unsplashImageAsset(),
    colorInput(),
    codeInput(),
  ],

  schema: {
    types: schemaTypes,
  },
});
