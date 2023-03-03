export type TemplateType = 'popular' | 'simple';

export interface ITemplateHeaderProps {
  title: string;
  type?: TemplateType;
}
