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
 * The CRM connector entities.
 *
 */
class CrmConnectorEntities {
  /**
   * Create a CrmConnectorEntities.
   * @member {string} logicalName The logical name.
   * @member {string} [displayName] The display name.
   * @member {boolean} [isProfile] Indicating whether this is profile.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CrmConnectorEntities
   *
   * @returns {object} metadata of CrmConnectorEntities
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CrmConnectorEntities',
      type: {
        name: 'Composite',
        className: 'CrmConnectorEntities',
        modelProperties: {
          logicalName: {
            required: true,
            serializedName: 'logicalName',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          isProfile: {
            required: false,
            serializedName: 'isProfile',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = CrmConnectorEntities;