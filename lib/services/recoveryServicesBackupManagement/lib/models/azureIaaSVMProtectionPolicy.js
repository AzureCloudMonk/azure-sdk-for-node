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
 * IaaS VM workload-specific backup policy.
 *
 * @extends models['ProtectionPolicy']
 */
class AzureIaaSVMProtectionPolicy extends models['ProtectionPolicy'] {
  /**
   * Create a AzureIaaSVMProtectionPolicy.
   * @member {object} [schedulePolicy] Backup schedule specified as part of
   * backup policy.
   * @member {string} [schedulePolicy.schedulePolicyType] Polymorphic
   * Discriminator
   * @member {object} [retentionPolicy] Retention policy with the details on
   * backup copy retention ranges.
   * @member {string} [retentionPolicy.retentionPolicyType] Polymorphic
   * Discriminator
   * @member {string} [timeZone] TimeZone optional input as string. For
   * example: TimeZone = "Pacific Standard Time".
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AzureIaaSVMProtectionPolicy
   *
   * @returns {object} metadata of AzureIaaSVMProtectionPolicy
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureIaasVM',
      type: {
        name: 'Composite',
        className: 'AzureIaaSVMProtectionPolicy',
        modelProperties: {
          protectedItemsCount: {
            required: false,
            serializedName: 'protectedItemsCount',
            type: {
              name: 'Number'
            }
          },
          backupManagementType: {
            required: true,
            serializedName: 'backupManagementType',
            type: {
              name: 'String'
            }
          },
          schedulePolicy: {
            required: false,
            serializedName: 'schedulePolicy',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'schedulePolicyType',
                clientName: 'schedulePolicyType'
              },
              uberParent: 'SchedulePolicy',
              className: 'SchedulePolicy'
            }
          },
          retentionPolicy: {
            required: false,
            serializedName: 'retentionPolicy',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'retentionPolicyType',
                clientName: 'retentionPolicyType'
              },
              uberParent: 'RetentionPolicy',
              className: 'RetentionPolicy'
            }
          },
          timeZone: {
            required: false,
            serializedName: 'timeZone',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureIaaSVMProtectionPolicy;