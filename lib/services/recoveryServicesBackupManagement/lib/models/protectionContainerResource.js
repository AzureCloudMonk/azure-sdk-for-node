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

const models = require('./index');

/**
 * Base class for container with backup items. Containers with specific
 * workloads are derived from this class.
 *
 * @extends models['Resource']
 */
class ProtectionContainerResource extends models['Resource'] {
  /**
   * Create a ProtectionContainerResource.
   * @member {object} [properties] ProtectionContainerResource properties
   * @member {string} [properties.friendlyName] Friendly name of the container.
   * @member {string} [properties.backupManagementType] Type of backup
   * managemenent for the container. Possible values include: 'Invalid',
   * 'AzureIaasVM', 'MAB', 'DPM', 'AzureBackupServer', 'AzureSql'
   * @member {string} [properties.registrationStatus] Status of registration of
   * the container with the Recovery Services Vault.
   * @member {string} [properties.healthStatus] Status of health of the
   * container.
   * @member {string} [properties.containerType] Type of the container. The
   * value of this property for: 1. Compute Azure VM is
   * Microsoft.Compute/virtualMachines 2. Classic Compute Azure VM is
   * Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB,
   * DPM etc) is Windows 4. Azure SQL instance is AzureSqlContainer. Possible
   * values include: 'Invalid', 'Unknown', 'IaasVMContainer',
   * 'IaasVMServiceContainer', 'DPMContainer', 'AzureBackupServerContainer',
   * 'MABContainer', 'Cluster', 'AzureSqlContainer', 'Windows', 'VCenter'
   * @member {string} [properties.protectableObjectType] Polymorphic
   * Discriminator
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ProtectionContainerResource
   *
   * @returns {object} metadata of ProtectionContainerResource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ProtectionContainerResource',
      type: {
        name: 'Composite',
        className: 'ProtectionContainerResource',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          eTag: {
            required: false,
            serializedName: 'eTag',
            type: {
              name: 'String'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'protectableObjectType',
                clientName: 'protectableObjectType'
              },
              uberParent: 'ProtectionContainer',
              className: 'ProtectionContainer'
            }
          }
        }
      }
    };
  }
}

module.exports = ProtectionContainerResource;