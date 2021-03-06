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
 * Usage details for subnet.
 *
 */
class VirtualNetworkUsage {
  /**
   * Create a VirtualNetworkUsage.
   * @member {number} [currentValue] Indicates number of IPs used from the
   * Subnet.
   * @member {string} [id] Subnet identifier.
   * @member {number} [limit] Indicates the size of the subnet.
   * @member {object} [name] The name containing common and localized value for
   * usage.
   * @member {string} [name.localizedValue] Localized subnet size and usage
   * string.
   * @member {string} [name.value] Subnet size and usage string.
   * @member {string} [unit] Usage units. Returns 'Count'
   */
  constructor() {
  }

  /**
   * Defines the metadata of VirtualNetworkUsage
   *
   * @returns {object} metadata of VirtualNetworkUsage
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VirtualNetworkUsage',
      type: {
        name: 'Composite',
        className: 'VirtualNetworkUsage',
        modelProperties: {
          currentValue: {
            required: false,
            readOnly: true,
            serializedName: 'currentValue',
            type: {
              name: 'Number'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          limit: {
            required: false,
            readOnly: true,
            serializedName: 'limit',
            type: {
              name: 'Number'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'Composite',
              className: 'VirtualNetworkUsageName'
            }
          },
          unit: {
            required: false,
            readOnly: true,
            serializedName: 'unit',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = VirtualNetworkUsage;
