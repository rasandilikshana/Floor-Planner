import styled, { css } from 'styled-components';

// Mixin for glass effect — use in other styled-components with ${glassMixin}
export const glassMixin = css`
  background: ${props => props.theme.glass.background};
  backdrop-filter: ${props => props.theme.glass.backdropFilter};
  -webkit-backdrop-filter: ${props => props.theme.glass.WebkitBackdropFilter};
  border: ${props => props.theme.glass.border};
`;

// Glass Panel — for sidebar, toolbar containers
export const GlassPanel = styled.aside`
  ${glassMixin}
  box-shadow: ${props => props.theme.shadows.md};
`;

// Glass Surface — for cards, inner panels
export const GlassSurface = styled.div`
  ${glassMixin}
  border-radius: ${props => props.theme.radius.md};
`;

// Glass Button — base interactive button with glass hover
export const GlassButton = styled.button`
  background: transparent;
  border: 1px solid transparent;
  color: ${props => props.theme.colors.textSecondary};
  cursor: pointer;
  transition: all ${props => props.theme.transition.default};
  border-radius: ${props => props.theme.radius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  outline: none;

  &:hover {
    background: ${props => props.theme.colors.surfaceHover};
    border-color: ${props => props.theme.colors.borderHover};
    color: ${props => props.theme.colors.textPrimary};
  }

  &:active {
    background: ${props => props.theme.colors.surfaceActive};
  }
`;

// Glass Input — dark inset input with glowing focus
export const GlassInput = styled.input`
  display: block;
  width: 100%;
  padding: 0 8px;
  font-size: 13px;
  line-height: 1.25;
  color: ${props => props.theme.colors.textPrimary};
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.radius.sm};
  outline: none;
  height: 30px;
  transition: border-color ${props => props.theme.transition.fast};

  &:focus {
    border-color: ${props => props.theme.colors.accentPrimary};
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.15);
  }

  &::placeholder {
    color: ${props => props.theme.colors.textMuted};
  }
`;

// Accent Text — gradient text effect
export const AccentText = styled.span`
  background: ${props => props.theme.colors.accentGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
