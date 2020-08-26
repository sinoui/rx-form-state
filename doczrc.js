import url from 'url';
import packageInfo from './package.json';

/**
 * 获取基本URL
 */
function getBaseUrl() {
  if (process.env.NODE_ENV === 'production') {
    const { name, homepage } = packageInfo;

    if (homepage) {
      return url.parse(homepage).path;
    }
    if (name.startsWith('@')) {
      return name.substr(name.indexOf('/'));
    }
    return `/${name}`;
  }
  return '/';
}

export default {
  typescript: true,
  files: ['docs/**/*.mdx'],
  public: './docs/assets',
  menu: [
    '开始',
    'useFormState',
    'FormStateContext',
    'Field',
    'FieldArray',
    'FormValueMonitor',
    'useFormStateContext',
    'useFormSelect',
    'useFormSubmitting',
    'useField',
    'useFieldState',
    'useFieldError',
    'useFieldValue',
    'useFieldTouched',
    'useFieldArray',
  ],
  base: getBaseUrl(),
};
