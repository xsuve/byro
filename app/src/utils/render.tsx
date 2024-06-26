import { Checkbox, Input, Select } from '@/components/ui';
import { FieldsStep } from '@/pages/ProcessPage/steps/FieldsStep';
import { DocumentsStep } from '@/pages/ProcessPage/steps/DocumentsStep';
import { ProcessField, ProcessStep } from '@shared/models/Process';
import { GenerateStep } from '@/pages/ProcessPage/steps/GenerateStep';

export function renderField(
  field: ProcessField,
  t: (str: string) => string,
  setFieldValue: (key: string, value: any) => void,
  value: any
) {
  switch (field.type) {
    case 'text':
      return (
        <Input
          key={field.name}
          label={t(field.label)}
          placeholder={t(field.label)}
          value={value}
          onChange={(value) => setFieldValue(field.name, value)}
        />
      );

    case 'select':
      return (
        <Select
          key={field.name}
          label={t(field.label)}
          onChange={(value) => setFieldValue(field.name, value)}
          defaultValue={value}
          options={(field.options || []).map((field) => ({
            value: field.value,
            label: t(field.label),
          }))}
        />
      );

    case 'boolean':
      return (
        <Checkbox
          key={field.name}
          id={field.name}
          label={t(field.label)}
          checked={value}
          onChange={(checked) => setFieldValue(field.name, checked)}
        />
      );

    case 'date':
      return <div>Date field</div>;
  }
}

export function renderStep(step: ProcessStep) {
  switch (step.type) {
    case 'fields':
      return <FieldsStep />;

    case 'documents':
      return <DocumentsStep />;

    case 'generate':
      return <GenerateStep />;
  }
}
