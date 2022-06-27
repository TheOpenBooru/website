import React from "react";
import styled from "styled-components";
import Settings from "js/settings";

export default function SettingsEditor(props) {
    function UpdateSetting(key, value) {
        Settings[key] = value;
    }
    return (
        <Container>
            <Setting>
                <SettingLabel htmlFor="PostPreview">
                    Fullscreen Button Previews:
                </SettingLabel>
                <SettingInput
                    type="checkbox"
                    name="PostPreview"
                    defaultChecked={Settings.fullscreenPostPreviews}
                    onClick={(e) => UpdateSetting("fullscreenPostPreviews", e.target.checked) }
                />
            </Setting>
            <Setting>
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
            </Setting>
            <Setting>
                <SettingLabel htmlFor="ApiUrl">API Url:</SettingLabel>
                <SettingInput
                    type="url"
                    name="ApiUrl"
                    defaultValue={Settings.apiUrl}
                    onChange={updateAPI}
                />
            </Setting>
        </Container>
    );
}


function updateAPI(e) {
    const url_regex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    (async () => {
        let url = e.target.value;
        if (url_regex.test(url)) {
            let r = await fetch(url);
            if (r.status === 200) {
                Settings.apiUrl = url;
            }
        }
    })()
}


const Container = styled.div`
    position: absolute;
    right:0;
    border-left: var(--COLOR-4) .2rem solid;
    background-color: var(--COLOR-2);
    width: fit-content;
    height: var(--PAGE-HEIGHT);
`;


const Setting = styled.div`
    padding: .5rem;
    border-bottom: 1px solid black;

    display: flex;
    flex-direction: row;
`;


const SettingLabel = styled.label`
    width: 15rem;
    `;

const SettingInput = styled.input`
    width: 10rem;
`;
