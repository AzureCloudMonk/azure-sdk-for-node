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
 * Managed service identity.
 *
 */
class ManagedServiceIdentity {
  /**
   * Create a ManagedServiceIdentity.
   * @member {string} [type] Type of managed service identity. Possible values
   * include: 'SystemAssigned'
   * @member {string} [tenantId] Tenant of managed service identity.
   * @member {string} [principalId] Principal Id of managed service identity.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ManagedServiceIdentity
   *
   * @returns {object} metadata of ManagedServiceIdentity
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ManagedServiceIdentity',
      type: {
        name: 'Composite',
        className: 'ManagedServiceIdentity',
        modelProperties: {
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          tenantId: {
            required: false,
            readOnly: true,
            serializedName: 'tenantId',
            type: {
              name: 'String'
            }
          },
          principalId: {
            required: false,
            readOnly: true,
            serializedName: 'principalId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ManagedServiceIdentity;