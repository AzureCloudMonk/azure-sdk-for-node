/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * The parameters supplied to the create or update source control operation.
 *
 */
class SourceControlCreateOrUpdateParameters {
  /**
   * Create a SourceControlCreateOrUpdateParameters.
   * @member {string} [repoUrl] Gets or sets the repo url of the source
   * control.
   * @member {string} [branch] Gets or sets the repo branch of the source
   * control. Include branch as empty string for VsoTfvc.
   * @member {string} [folderPath] Gets or sets the folder path of the source
   * control. Path must be relative.
   * @member {boolean} [autoSync] Gets or sets auto async of the source
   * control. Default is false.
   * @member {boolean} [publishRunbook] Gets or sets the auto publish of the
   * source control. Default is true.
   * @member {string} [sourceType] The source type. Must be one of VsoGit,
   * VsoTfvc, GitHub, case sensitive. Possible values include: 'VsoGit',
   * 'VsoTfvc', 'GitHub'
   * @member {string} [securityToken] Gets or sets the authorization token for
   * the repo of the source control.
   * @member {string} [description] Gets or sets the user description of the
   * source control.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SourceControlCreateOrUpdateParameters
   *
   * @returns {object} metadata of SourceControlCreateOrUpdateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SourceControlCreateOrUpdateParameters',
      type: {
        name: 'Composite',
        className: 'SourceControlCreateOrUpdateParameters',
        modelProperties: {
          repoUrl: {
            required: false,
            serializedName: 'properties.repoUrl',
            constraints: {
              MaxLength: 2000
            },
            type: {
              name: 'String'
            }
          },
          branch: {
            required: false,
            serializedName: 'properties.branch',
            constraints: {
              MaxLength: 255
            },
            type: {
              name: 'String'
            }
          },
          folderPath: {
            required: false,
            serializedName: 'properties.folderPath',
            constraints: {
              MaxLength: 255
            },
            type: {
              name: 'String'
            }
          },
          autoSync: {
            required: false,
            serializedName: 'properties.autoSync',
            type: {
              name: 'Boolean'
            }
          },
          publishRunbook: {
            required: false,
            serializedName: 'properties.publishRunbook',
            type: {
              name: 'Boolean'
            }
          },
          sourceType: {
            required: false,
            serializedName: 'properties.sourceType',
            type: {
              name: 'String'
            }
          },
          securityToken: {
            required: false,
            serializedName: 'properties.securityToken',
            constraints: {
              MaxLength: 1024
            },
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            constraints: {
              MaxLength: 512
            },
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SourceControlCreateOrUpdateParameters;