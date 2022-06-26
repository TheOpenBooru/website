import React from "react";
import styled from "styled-components";
import Settings from "js/settings";

export default function SettingsEditor(props) {
    function UpdateSetting(key, value) {
        Settings[key] = value;
    }
    return (
        <Container>
            <SettingContainer>
                <SettingLabel htmlFor="PostPreview">
                    Fullscreen Button Previews:
                </SettingLabel>
                <SettingInput
                    type="checkbox"
                    name="PostPreview"
                    defaultChecked={Settings.fullscreenPostPreviews}
                    onClick={(e) => UpdateSetting("fullscreenPostPreviews", e.target.checked) }
                />
            </SettingContainer>
            <SettingContainer>
                <SettingLabel htmlFor="GridSize">Grid Size:</SettingLabel>
                <SettingInput
                    type="range"
                    min="4"
                    defaultValue={Settings.PostsGridSize}
                    max="24"
                    name="GridSize"
                    onChange={(e) => {
                        let value = e.target.value;
                        Settings.PostsGridSize = value;
                        e.target.title = `Grid Size is ${value}rems`;
                    }}
                />
            </SettingContainer>
            {/* <SettingContainer>
                <SettingLabel htmlFor="ApiUrl">API Url:</SettingLabel>
                <SettingInput
                    type="url"
                    name="ApiUrl"
                    defaultValue={Settings.apiUrl}
                    onChange={(e) => (Settings.apiUrl = e.target.value)}
                />
            </SettingContainer> */}
        </Container>
    );
}

const SettingContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: .5rem;
    border-bottom: 1px solid black;
`;

const Container = styled.div`
    border: var(--COLOR-4) .2rem solid;
    background-color: var(--COLOR-2);
    width: fit-content;
`;

const SettingLabel = styled.label`
    width: 15rem;
`;

const SettingInput = styled.input`
    width: fit-content;
`;
